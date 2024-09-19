import React from "react";
import { DataTable } from "react-data-table-by-audmes";

const App = () => {
	const columns = [
		{ name: "First Name", id: "firstName", sortable: true },
		{ name: "Last Name", id: "lastName", sortable: true },
		{ name: "City", id: "city", sortable: true },
		{ name: "Birthday", id: "birthday", sortable: true },
	];

	const employees = [
		{ firstName: "John", lastName: "Doe",  city: "New York", birthday: "1980-01-02" },
		{ firstName: "Jane", lastName: "Doe", city: "Los Angeles", birthday: "1985-02-14" },
		{ firstName: "John", lastName: "Smith", city: "Chicago", birthday: "1970-11-22" },
		{ firstName: "Jane", lastName: "Smith", city: "Houston", birthday: "1975-09-30" },
		{ firstName: "Jack", lastName: "Black", city: "Philadelphia", birthday: "1960-12-21" },
		{ firstName: "Jill", lastName: "Black", city: "Phoenix", birthday: "1965-10-28" },
		{ firstName: "Jack", lastName: "White", city: "San Antonio", birthday: "1950-03-17" },
		{ firstName: "Jill", lastName: "White", city: "San Diego", birthday: "1955-05-19" },
		{ firstName: "John", lastName: "Brown", city: "Dallas", birthday: "1940-08-06" },
		{ firstName: "Jane", lastName: "Brown", city: "San Jose", birthday: "1945-06-24" },
		{ firstName: "Jack", lastName: "Brown", city: "Austin", birthday: "1930-07-13" },
		{ firstName: "Jill", lastName: "Brown", city: "Jacksonville", birthday: "1935-04-01" },
		{ firstName: "John", lastName: "Green", city: "San Francisco", birthday: "1920-09-10" },
		{ firstName: "Jane", lastName: "Green", city: "Indianapolis", birthday: "1925-12-25" },
		{ firstName: "Jack", lastName: "Green", city: "Columbus", birthday: "1910-04-15" },
		{ firstName: "Jill", lastName: "Green", city: "Fort Worth", birthday: "1915-02-23" },
		{ firstName: "John", lastName: "Blue", city: "Charlotte", birthday: "1900-05-20" },
		{ firstName: "Jane", lastName: "Blue", city: "Detroit", birthday: "1905-03-07" },
		{ firstName: "Jack", lastName: "Blue", city: "El Paso", birthday: "1890-01-04" },
		{ firstName: "Jill", lastName: "Blue", city: "Memphis", birthday: "1895-11-11" },
	];

	return (
		<main style={{ maxWidth: "1000px", margin: "0 auto" }}>
			<DataTable columns={columns} data={employees} tableId="employee" sortId="lastName" />
		</main>
	);
};

export default App;