
import React from "react";
import {
  DataGrid,
  GridToolbar,
} from "@mui/x-data-grid";
import {
  TextField,
  Paper,
  Typography,
  InputAdornment,
  IconButton,
  Chip,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { PencilSimple, CopySimple, Trash, CheckCircle, Warning } from "phosphor-react";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
const columns = [
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
        icon = <AvTimerOutlinedIcon size={20} style={{ color: "orange" }} />;
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
const paginationModel = { page: 0, pageSize: 5 };

const data = [
  {
    id: "1007243",
    company: "AgroFood GmbH",
    address: "Hauptstrasse 5, 4000 Basel",
    gebNr: "23456789",
    tags: ["Lebensmittel", "GEB Zucker"],
    status: "Bewilligung erteilt",
  },
  {
    id: "1007244",
    company: "Bäckerei Müller AG",
    address: "Bahnhofstrasse 10, 8000 Zürich",
    gebNr: "98765432",
    tags: ["Speiseöl und Speisefette", "Lebensmittel"],
    status: "Bewilligung abgelehnt",
  },
  {
    id: "1007245",
    company: "Swiss BioFarm AG",
    address: "Landstrasse 22, 5000 Aarau",
    gebNr: "34567890",
    tags: ["GEB Zucker"],
    status: "Bewilligung ausstehend",
  },
  {
    id: "1007246",
    company: "Fresh Delights GmbH",
    address: "Marktplatz 3, 3000 Bern",
    gebNr: "87654321",
    tags: ["Speiseöl und Speisefette"],
    status: "Bewilligung erteilt",
  },
  {
    id: "1007247",
    company: "Bio Natura SA",
    address: "Seestrasse 8, 6000 Luzern",
    gebNr: "76543210",
    tags: ["Lebensmittel", "Speiseöl und Speisefette"],
    status: "Bewilligung abgelehnt",
  },
  {
    id: "1007248",
    company: "Farming Co.",
    address: "Grünweg 15, 9000 St. Gallen",
    gebNr: "54321098",
    tags: ["GEB Zucker", "Lebensmittel"],
    status: "Bewilligung erteilt",
  },
  {
    id: "1007249",
    company: "ChocoTreats AG",
    address: "Industriestrasse 12, 8000 Zürich",
    gebNr: "65432109",
    tags: ["Lebensmittel", "GEB Zucker"],
    status: "Bewilligung ausstehend",
  },
  {
    id: "1007250",
    company: "Urban Foods GmbH",
    address: "Rathausplatz 9, 3000 Bern",
    gebNr: "23456789",
    tags: ["Speiseöl und Speisefette"],
    status: "Bewilligung erteilt",
  },
  {
    id: "1007251",
    company: "Schweizer Küche AG",
    address: "Altstadtgasse 6, 4000 Basel",
    gebNr: "76543210",
    tags: ["GEB Zucker"],
    status: "Bewilligung abgelehnt",
  },
  {
    id: "1007252",
    company: "Happy Harvest SA",
    address: "Bergstrasse 18, 5000 Aarau",
    gebNr: "87654321",
    tags: ["Lebensmittel", "Speiseöl und Speisefette"],
    status: "Bewilligung ausstehend",
  },
  {
    id: "1007253",
    company: "Golden Grain GmbH",
    address: "Mühlengasse 7, 6000 Luzern",
    gebNr: "98765432",
    tags: ["GEB Zucker", "Lebensmittel"],
    status: "Bewilligung erteilt",
  },
  {
    id: "1007254",
    company: "Pure Essence GmbH",
    address: "Lindenstrasse 4, 9000 St. Gallen",
    gebNr: "12345678",
    tags: ["Lebensmittel", "GEB Zucker"],
    status: "Bewilligung abgelehnt",
  },
  {
    id: "1007255",
    company: "Fresh Start AG",
    address: "Sonnenstrasse 5, 3000 Bern",
    gebNr: "23456789",
    tags: ["Speiseöl und Speisefette"],
    status: "Bewilligung ausstehend",
  },
  {
    id: "1007256",
    company: "Alpenkraft GmbH",
    address: "Waldweg 11, 8000 Zürich",
    gebNr: "87654321",
    tags: ["Lebensmittel"],
    status: "Bewilligung erteilt",
  },
  {
    id: "1007257",
    company: "Green Valley AG",
    address: "Blumenstrasse 3, 4000 Basel",
    gebNr: "76543210",
    tags: ["GEB Zucker"],
    status: "Bewilligung abgelehnt",
  },
  {
    id: "1007258",
    company: "Sweet Moments GmbH",
    address: "Hauptplatz 2, 5000 Aarau",
    gebNr: "65432109",
    tags: ["Speiseöl und Speisefette", "GEB Zucker"],
    status: "Bewilligung ausstehend",
  },
  {
    id: "1007259",
    company: "BioLife AG",
    address: "Hügellandweg 9, 3000 Bern",
    gebNr: "54321098",
    tags: ["Lebensmittel"],
    status: "Bewilligung erteilt",
  },
  {
    id: "1007260",
    company: "Vital Harvest GmbH",
    address: "Bergweg 7, 6000 Luzern",
    gebNr: "98765432",
    tags: ["GEB Zucker"],
    status: "Bewilligung abgelehnt",
  },
  {
    id: "1007261",
    company: "Swiss Gourmet AG",
    address: "Marktstrasse 6, 8000 Zürich",
    gebNr: "65432109",
    tags: ["Lebensmittel", "Speiseöl und Speisefette"],
    status: "Bewilligung ausstehend",
  },
  {
    id: "1007262",
    company: "Herbal Essence GmbH",
    address: "Wiesenweg 8, 9000 St. Gallen",
    gebNr: "54321098",
    tags: ["Lebensmittel", "GEB Zucker"],
    status: "Bewilligung erteilt",
  },
  {
    id: "1007263",
    company: "Green Delight SA",
    address: "Blütenstrasse 3, 4000 Basel",
    gebNr: "76543210",
    tags: ["Speiseöl und Speisefette"],
    status: "Bewilligung abgelehnt",
  },
  {
    id: "1007264",
    company: "Mountain Bliss GmbH",
    address: "Gipfelweg 10, 5000 Aarau",
    gebNr: "87654321",
    tags: ["Lebensmittel", "GEB Zucker"],
    status: "Bewilligung ausstehend",
  },
  {
    id: "1007265",
    company: "Alpine Foods AG",
    address: "Schlossweg 7, 3000 Bern",
    gebNr: "12345678",
    tags: ["Speiseöl und Speisefette"],
    status: "Bewilligung erteilt",
  },
  {
    id: "1007266",
    company: "Natural Goodness SA",
    address: "Flussufer 9, 6000 Luzern",
    gebNr: "23456789",
    tags: ["GEB Zucker"],
    status: "Bewilligung abgelehnt",
  },
  {
    id: "1007267",
    company: "Country Fresh GmbH",
    address: "Weidenweg 2, 8000 Zürich",
    gebNr: "65432109",
    tags: ["Lebensmittel"],
    status: "Bewilligung ausstehend",
  },
  {
    id: "1007268",
    company: "Swiss Pantry AG",
    address: "Hauptstrasse 6, 4000 Basel",
    gebNr: "76543210",
    tags: ["Lebensmittel", "GEB Zucker"],
    status: "Bewilligung erteilt",
  },
  {
    id: "1007269",
    company: "Organic Valley GmbH",
    address: "Alpenstrasse 4, 5000 Aarau",
    gebNr: "54321098",
    tags: ["Speiseöl und Speisefette"],
    status: "Bewilligung abgelehnt",
  },
  {
    id: "1007270",
    company: "Healthy Harvest AG",
    address: "Talweg 8, 3000 Bern",
    gebNr: "12345678",
    tags: ["Lebensmittel"],
    status: "Bewilligung ausstehend",
  },
]

const getData = async (url) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
};

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      data :[]
      
    };
  }

  async componentDidMount() {
    const data = await getData(
      "https://api.fakend.fyi/dV5GgoIEpnViuZnouKak/ZTFDa9Q2Qo4Uc3M5aisD"
    );
    this.setState({ data });
  }

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };
  clearSearch = () => {
    this.setState({ searchQuery: "" });
  };
  
  render() {
    const { searchQuery, data } = this.state;
    const filteredData = data.filter(
      (item) =>
        item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

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
            onChange={this.handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                searchQuery && (
                  <InputAdornment position="end">
                    <IconButton onClick={this.clearSearch}>
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                )
              ),
            }}
          />
        </Box>
        <Paper sx={{ height: "auto", width: "100%" }}>
          <DataGrid
            rows={filteredData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10]}
            checkboxSelection
            autoHeight
            disableColumnMenu
            pageSizeOptions={[5, 10]}
            initialState={{ pagination: { paginationModel } }}
            components={{ Toolbar: GridToolbar }}
            getRowId={(row, index) => `${row.id}-${index}`}
            
          />
        </Paper>
      </>
    );
  }
}
export default Home;
