import { useMemo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";

import { firestore } from "../../../firebase/firebase.utils.js";

import { selectEntries } from "../../../redux/entry/entry.selectors.js";
import { selectCurrentUser } from "../../../redux/user/user.selectors.js";
import { updateEntries } from "../../../redux/entry/entry.actions.js";

import { COLUMNS } from "./columns.js";
import SearchBox from "../search-box.component";
import CheckBox from "../checkbox.js";
import DeleteEntry from "./delete-entry/delete-entry.component";
import NoEntriesInfo from "../no-entries-info.component";
import Loader from "../../loader/loader.component";
import FetchError from "../../fetch-error/fetch-error.component";
import ClearSelected from "../clear-selected.component";

import { ButtonDiv } from "../../styles/tables/table-option-buttons/table-option-button.styles";

import {
  Container,
  SearchDiv,
  NoMatchDiv,
  HeaderRemoveText,
  TableDiv,
  PaginationDiv,
  PageButton,
  PaginationTextDiv,
  PaginationText,
  PaginationInput,
  PaginationSelect,
} from "../../styles/tables/tables.styles.jsx";

import { StyledTable, HelpText } from "./table.styles";

const Table = ({ entries, currentUser, dispatch }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!currentUser) return;
    setIsLoading(true);
    let unsubscribeFromSnapshot = null;
    const userRef = firestore.doc(`users/${currentUser.id}`);

    try {
      unsubscribeFromSnapshot = userRef.onSnapshot((snapshot) => {
        if (snapshot.exists) {
          const { entries } = snapshot.data();
          dispatch(updateEntries(entries));
          setIsLoading(false);
        } else {
          setErrorMessage("Snapshot Error");
          setIsLoading(false);
        }
      });
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }

    return () => {
      unsubscribeFromSnapshot();
    };
  }, [dispatch, currentUser]);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => entries, [entries]);

  const scrollToTop = () => {
    document.body.scrollTop = 120; // For Safari
    document.documentElement.scrollTop = 120; // For Chrome, Firefox, IE and Opera
  };

  const initialState = {
    sortBy: [{ id: "entry", desc: false }],
    pageSize: 25,
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      initialState,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          ...columns,
          {
            Header: () => <HeaderRemoveText>&#10004;</HeaderRemoveText>,

            Cell: ({ row }) => {
              return <CheckBox {...row.getToggleRowSelectedProps()} />;
            },
          },
        ];
      });
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const chosenEntry = selectedFlatRows.map((row) => row.original);

  entries = chosenEntry;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          {data.length === 0 ? (
            <NoEntriesInfo />
          ) : (
            <div>
              {chosenEntry.length === 0 && errorMessage === "" ? (
                <SearchDiv>
                  <SearchBox
                    filter={globalFilter}
                    setFilter={setGlobalFilter}
                  />
                </SearchDiv>
              ) : chosenEntry.length === 0 &&
                errorMessage === "Snapshot Error" ? (
                <FetchError />
              ) : chosenEntry.length === 0 &&
                errorMessage !== "Snapshot Error" &&
                errorMessage !== "" ? (
                <FetchError error={errorMessage} />
              ) : null}

              {rows.length === 0 && data.length !== 0 ? (
                <NoMatchDiv>
                  <h2>No Items Found, please refine your search :)</h2>
                </NoMatchDiv>
              ) : null}

              {chosenEntry.length === 1 ? (
                <div>
                  {entries.map((entry) => (
                    <ButtonDiv key={entry.id}>
                      <DeleteEntry entryToDelete={entry} />
                      <HelpText>
                        untick the item to remove the delete button
                      </HelpText>
                    </ButtonDiv>
                  ))}
                </div>
              ) : chosenEntry.length > 1 ? (
                <ButtonDiv>
                  <ClearSelected />
                </ButtonDiv>
              ) : null}

              {errorMessage === "" && (
                <TableDiv>
                  <StyledTable initialState={initialState} {...getTableProps()}>
                    <thead>
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}
                            >
                              {column.render("Header")}
                              <span>
                                {column.isSorted
                                  ? column.isSortedDesc
                                    ? " ⬇️"
                                    : " ⬆️"
                                  : ""}
                              </span>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                      {page.map((row) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                              return (
                                <td {...cell.getCellProps()}>
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </StyledTable>
                </TableDiv>
              )}

              {data.length > 25 && errorMessage === "" && (
                <PaginationDiv>
                  <div>
                    <PaginationText>
                      Page {pageIndex + 1} Of {pageOptions.length}
                    </PaginationText>

                    <PageButton
                      onClick={() => gotoPage(0)}
                      disabled={!canPreviousPage}
                    >
                      &#10094;&#10094;
                    </PageButton>

                    <PageButton
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                    >
                      &#10094;
                    </PageButton>
                    <PageButton
                      onClick={() => {
                        nextPage();
                        scrollToTop();
                      }}
                      disabled={!canNextPage}
                    >
                      &#10095;
                    </PageButton>

                    <PageButton
                      onClick={() => {
                        gotoPage(pageCount - 1);
                        scrollToTop();
                      }}
                      disabled={!canNextPage}
                    >
                      &#10095;&#10095;
                    </PageButton>

                    <PaginationTextDiv>
                      <PaginationText>Or Go To Page: </PaginationText>
                      <PaginationInput
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                          const pageNumber = e.target.value
                            ? Number(e.target.value) - 1
                            : 0;
                          gotoPage(pageNumber);
                        }}
                      />
                    </PaginationTextDiv>

                    <div>
                      <PaginationSelect
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}
                      >
                        {[10, 25, 50].map((pageSize) => (
                          <option key={pageSize} value={pageSize}>
                            Show {pageSize} Rows
                          </option>
                        ))}
                      </PaginationSelect>
                    </div>
                  </div>
                </PaginationDiv>
              )}
            </div>
          )}
        </Container>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  entries: selectEntries,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Table);
