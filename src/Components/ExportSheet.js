import React, { useState } from "react";
import ReactExport from "react-data-export";


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

export default function ExportSheet() {

  const [exporData, setExportData] = useState([
    {
      "Registered Date": "18/10/2021 04:59 PM",
      Name: "Steven",
      Email: "steven@gmail.com",
      "Mob No": "8754887762",
      Address: "Tirunelveli",
      Password: "cus-92073",
      "customer ID": "cus-92073",
    },
    {
      "Registered Date": "19/10/2021 10:36 AM",
      Name: "Soma",
      Email: "soma@gmail.com",
      "Mob No": "9488994552",
      Address: "Tirunelveli",
      Password: "cus-38950",
      "Customer ID": "cus-38950",
    },
    {
      "Registered Date": "19/10/2021 07:05 PM",
      Name: "raja",
      Email: "raja@gmail.com",
      "Mob No": "9092488202",
      Address: "TVL0",
      Password: "cus-78789",
      "Customer ID": "cus-78789",
    },
    {
      "Registered Date": "20/10/2021 01:48 PM",
      Name: "Durai",
      Email: "durai@gmail.com",
      "Mob No": "9488994551",
      Address: "UK",
      Password: "cus-81465",
    },
    {
      "Registered Date": "21/10/2021 11:06 AM",
      Name: "Komala",
      Email: "komala @gmail.com",
      "Mob No": "9888888888",
      Address: "Tirunelveli",
      Password: "cus-71397",
    },
  ]);
  

  const DataSet = [
    {
      columns: [
        {
          title: "Name",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 125 },
        },
        {
          title: "Email",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 150 },
        },
        {
          title: "Mob No",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 135 },
        },
        {
          title: "Registered Date",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 150 },
        },
        {
          title: "Address",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 125 },
        },
        {
          title: "Password",
          style: { font: { sz: "18", bold: true } },
          width: { wpx: 125 },
        },
      ],
      data: exporData.map((data) => [
        { value: data["Name"], style: { font: { sz: "14" } } },
        { value: data["Email"], style: { font: { sz: "14" } } },
        { value: data["Mob No"], style: { font: { sz: "14" } } },
        { value: data["Registered Date"], style: { font: { sz: "14" } } },
        { value: data["Address"], style: { font: { sz: "14" } } },
        { value: data["Password"], style: { font: { sz: "14" } } },
      ]),
    },
  ];

  return (
    <div>
      {exporData.length !== 0 ? (
                         <ExcelFile 
                         filename="Covid-19 Data" 
                         element={<button type="button" className="btn btn-success float-right m-3">Export Data</button>}>
                             <ExcelSheet dataSet={DataSet} name="Covid-19 Country Report"/>
                         </ExcelFile>
                    ): null}        

    </div>
  );
}
