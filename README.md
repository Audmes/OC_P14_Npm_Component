# OC_P14_Npm_Component
*Was made for a student projet for OpenClassrooms.*

This library is a react component to render a table using two arrays of objects.

The table can be sorted, filtered (using a search input), paginated and the number of row can be change (all can be disable).

[Documentation](https://audmes.github.io/OC_P14_Npm_Component/)

## Installation
Run the following command:
````
# If you use npm:
npm install react-data-table-by-audmes

# If you use yarn:
yarn add react-data-table-by-audmes
````

## Usage
````
import { DataTable } from "react-data-table-by-audmes";

const App = () => {
	const columns = [
		{ name: "First Name", id: "firstName", sortable: true },
		{ name: "Last Name", id: "lastName", sortable: true },
		{ name: "City", id: "city", sortable: true },
		{ name: "Birthday", id: "birthday", sortable: true },
	];

	const data = [
		{ firstName: "John", lastName: "Doe", city: "New York", birthday: "1980-01-02" },
		{ firstName: "Jane", lastName: "Doe", city: "Los Angeles", birthday: "1985-02-14" },
		{ firstName: "John", lastName: "Smith", city: "Chicago", birthday: "1970-11-22" },
		{ firstName: "Jane", lastName: "Smith", city: "Houston", birthday: "1975-09-30" },
	];

	return (
		<main>
			<DataTable columns={columns} data={data} tableId="employee" sortId="lastName" />
		</main>
	);
};

````
### Columns array
This array is use to render the head columns
- name: the name of the column displayed in the table header
- id: the id of the column
- sortable: boolean, if the column is sortable
- headColSpan: size of the column in the header bodyColSpan: size of the column in the body

### Data array
This array must contain the data of the table, every object will be a row.

The key must be the id of the column and the value will be the data in the row/column.

## Props list
|Name|Type|Required|Description|Default|
|--- |--- |--- |--- |--- |
|data|arrayOf|Yes|The data to be displayed in the table||
|columns|arrayOf|Yes|The columns to be displayed in the table||
|tableId|string|Yes|The id of the table||
|sortId|string|No|The id of the column to be sorted|function()|
|itemsPerPageOptions|array|No|The options for the items per page dropdown|[10, 25, 50, 100]|
|itemsPerPageSelectionEnabled|bool|No|Whether the items per page dropdown should be enabled|true|
|searchEnabled|bool|No|Whether the search input should be enabled|true|
|sortSelectionEnabled|bool|No|Whether the sort dropdown should be enabled|true|
|tableInfoEnabled|bool|No|Whether the table info should be enabled|true|
|paginationEnabled|bool|No|Whether the pagination should be enabled|true|
|dataTablesWrapperClassName|string|No|The class name of the wrapper div|"data-tables-wrapper"|
|dataTablesLengthClassName|string|No|The class name of the length div|"data-tables-length"|
|dataTablesLengthLabelClassName|string|No|The class name of the length label|"data-tables-length-label"|
|dataTablesLengthSelectClassName|string|No|The class name of the length select|"data-tables-length-select"|
|dataTablesLengthOptionClassName|string|No|The class name of the length options|"data-tables-length-option"|
|dataTablesSearchWrapperClassName|string|No|The class name of the search wrapper div|"data-tables-search-wrapper"|
|dataTablesSearchLabelClassName|string|No|The class name of the search label|"form-label"|
|dataTablesSearchInputClassName|string|No|The class name of the search input|"form-input"|
|dataTablesInfoClassName|string|No|The class name of the info div|"data-tables-info"|
|dataTablesPaginateClassName|string|No|The class name of the paginate div|"data-tables-paginate"|
|dataTableClassName|string|No|The class name of the table|"data-table"|
|dataTableHeaderClassName|string|No|The class name of the table header|"data-table-header"|
|dataTableHeaderTrClassName|string|No|The class name of the table header tr|"data-table-header-tr"|
|dataTableHeaderThClassName|string|No|The class name of the table header th|"data-table-header-th"|
|dataTableHeaderSortedClassName|string|No|The class name of the table header th sorted|"sorting"|
|dataTableBodyClassName|string|No|The class name of the table body|"data-table-body"|
|dataTableBodyTrClassName|string|No|The class name of the table body tr|"data-table-body-tr"|
|dataTableBodyTdClassName|string|No|The class name of the table body td|"data-table-body-td"|
|dataTableBodyTdSortedClassName|string|No|The class name of the table body td sorted|"sorting_1"|
|dataTableBodyTdEmptyClassName|string|No|The class name of the table body td empty|"data-tables-empty"|
|dataTableBodyOddRowClassName|string|No|The class name of the table body tr odd|"odd"|
|dataTableBodyEvenRowClassName|string|No|The class name of the table body tr even|"even"|

## Author
**Audrey Mesnage** : [**GitHub**](https://github.com/Audmes/) - [**Portfolio**](https://amsprods.com/)