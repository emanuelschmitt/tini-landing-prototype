import React from "react";
import TextModule from "../modules/text-module";
import styled from "styled-components";

const dates = [
  {
    date: "05-05-2019",
    venue: "Lolla Palooza",
    location: "Rome, Italy",
    facebookLink: "https://facebook.com"
  },
  {
    date: "05-05-2019",
    venue: "Berghain",
    location: "Berlin, Germany",
    facebookLink: "https://facebook.com"
  },
  {
    date: "05-05-2019",
    venue: "Berghain",
    location: "Berlin, Germany",
    facebookLink: "https://facebook.com"
  },
  {
    date: "05-05-2019",
    venue: "Berghain",
    location: "Berlin, Germany",
    facebookLink: "https://facebook.com"
  },
  {
    date: "05-05-2019",
    venue: "Berghain",
    location: "Berlin, Germany",
    facebookLink: "https://facebook.com"
  },
  {
    date: "05-05-2019",
    venue: "Berghain",
    location: "Berlin, Germany",
    facebookLink: "https://facebook.com"
  },
  {
    date: "05-05-2019",
    venue: "Berghain",
    location: "Berlin, Germany",
    facebookLink: "https://facebook.com"
  },
  {
    date: "05-05-2019",
    venue: "Berghain",
    location: "Berlin, Germany",
    facebookLink: "https://facebook.com"
  },
  {
    date: "05-05-2019",
    venue: "Berghain",
    location: "Berlin, Germany",
    facebookLink: "https://facebook.com"
  },
  {
    date: "05-05-2019",
    venue: "Berghain",
    location: "Berlin, Germany",
    facebookLink: "https://facebook.com"
  }
];

const Table = styled.table`
  text-transform: uppercase;
  width: 100%;
  border-collapse: collapse;
`;

const TableData = styled.td`
  padding-right: 2rem;
  padding-bottom: 0.5rem;

  &:last-of-type {
    padding: 0;
  }
`;
const TableRow = styled.tr``;

function DateRow({ date }) {
  return (
    <TableRow>
      <TableData>{date.date}</TableData>
      <TableData>{date.venue}</TableData>
      <TableData>{date.location}</TableData>
      <TableData>
        <a href={date.facebookLink}>Facebook</a>
      </TableData>
    </TableRow>
  );
}

function Dates() {
  return (
    <TextModule>
      <h1>Upcoming Dates</h1>
      <Table>
        <tbody>
          {dates.map(date => (
            <DateRow date={date} />
          ))}
        </tbody>
      </Table>
    </TextModule>
  );
}

export default Dates;
