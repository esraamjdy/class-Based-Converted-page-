import React, { useEffect, useState } from "react";

import {
  TextField,
  Paper,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { 
  PencilSimple, 
  CopySimple, 
  Trash, 
  CheckCircle, 
  Warning 
} from "phosphor-react";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns : GridColDef[] = [
  { field: "id", headerName: "K-Nr.", flex: 1 },
  { field: "company", headerName: "Firma", flex: 2 },
  { field: "address", headerName: "Adresse", flex: 2 },
  { field: "gebNr", headerName: "GEB-Nr", flex: 1 },
  {
    field: "tags",
    headerName: "Tags",
    flex: 3,

    renderCell: (params) =>
      params.row.tags.map((tag, index) => (
        <Chip
          sx={{ color: "#546E7A", borderColor: "#546E7A" }}
          key={index}
          label={tag}
          variant="outlined"
          style={{ marginRight: "5px" }}
        />
      )),
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1.5,
    renderCell: (params) => {
      const { status } = params.row;
      let icon = null;
      if (status === "Bewilligung erteilt") {
        icon = <CheckCircle size={20} style={{ color: "green" }} />;
      } else if (status === "Bewilligung abgelehnt") {
        icon = <Warning size={20} style={{ color: "red" }} />;
      } else if (status === "Bewilligung ausstehend") {
        icon = <AvTimerOutlinedIcon  style={{ color: "orange", fontSize:"20px" }} />;
      }
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          {icon}
          <Typography style={{ marginLeft: "5px" }}>{status}</Typography>
        </div>
      );
    },
  },
  {
    field: "actions",
    headerName: "Aktion",
    flex: 1,
    renderCell: () => (
      <div style={{ display: "flex", gap: "10px" }}>
        <PencilSimple size={20} />
        <CopySimple size={20} />
        <Trash size={20} />
      </div>
    ),
  },
];

async function getData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

const Home : React.FC = () =>{

  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.fakend.fyi/dV5GgoIEpnViuZnouKak/boATCJtvIeeQyovnLcim/organisation";
      const result = await getData(url);
      if (result) {
        setData(result.payload.data);
        setFilteredData(result.payload.data);
      }
    };
    fetchData();
  }, []);
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredData(
      data.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(query)
        )
      )
    );
  };
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Organisationen
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        style={{ fontSize: "1rem", fontWeight: "lighter", color: "gray" }}
      >
        Subhead Optional: Angaben zur Organisation
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
        <TextField
          label="Suche"
          variant="outlined"
          style={{ width: "300px" }}
          value={searchQuery}
          onChange={handleSearch}
          InputProps={{
            endAdornment: (
              <>
                {searchQuery && (
                  <SearchIcon />
                )}
              </>
            ),
          }}
        />

      </Box>
      <Paper sx={{ height: "auto", width: "100%" }}>
        <DataGrid
          rows={filteredData || []}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Paper>
    </>
  );

}

export default Home;
