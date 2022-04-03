
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Cancel, Tag } from "@mui/icons-material";
import { FormControl, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";

const Tags = ({ data, handleDelete }) => {
  return (
    <Box
      sx={{
        background: "#283240",
        height: "100%",
        display: "flex",
        padding: "0.4rem",
        margin: "0 0.5rem 0 0",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
      }}
    >
      <Stack direction="row" gap={1}>
        <Typography>{data}</Typography>
        <Cancel
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

function App() {
  const [tags, SetTags] = useState([]);
  const tagRef = useRef();

  const handleDelete = (value) => {
    const newtags = tags.filter((val) => val !== value);
    SetTags(newtags);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    SetTags([...tags, tagRef.current.value]);
    tagRef.current.value = "";
  };
  return (
    <div class="main-big">
      <div>
        <div class="wrapper bg-white mt-sm-5">
          <h4 class="pb-4 border-bottom">Post Job</h4>
          <h2 style={{ color: "green" }} class="pb-4 border-bottom">
            Basic Details
          </h2>
          <div class="d-flex align-items-start py-3 "></div>
          <div class="py-2" />
          {/* <form action="/v1jobs/job" method="POST"> */}
          <label for="fname">Job Title*</label>
          <input
            type="text"
            id="fname"
            name="fname"
            size="60"
            placeholder="Write a title that appropriately describes this job"
          />
          <br />
          {/* </form> */}
          <br />
          Location*
          <div class="py-2">
            {/* <form action="/action_page.php"> */}
            <label for="fname"></label>
            <br />
            {
              <select name="country" id="country" class="bg-light">
                <option value="five" selected>
                  + Add location
                </option>
                <option value="four">Mumbai</option>
                <option value="three">Bangalore</option>
                <option value="two">Pune</option>
                <option value="two">Delhi</option>
                <option value="two">Kolkata</option>
              </select>
            }
            {/* </form> */}
          </div>
          <br />
          Years of Experience*
          <div class="row py-2">
            <div class="col-md-6">
              <label for="min exp"></label>
              <select name="country" id="country" class="bg-light">
                <option value="five" selected>
                  Select Min
                </option>
                <option value="one">1</option>

                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four"></option>
              </select>
            </div>
            <div class="col-md-6 pt-md-0 pt-3" id="lang">
              <label for="max exp"></label>
              <div class="arrow">
                <select name="language" id="language" class="bg-light">
                  <option value="english" selected>
                    Select Max
                  </option>
                  <option value="english_us">5+</option>
                  <option value="enguk">10+</option>
                  <option value="arab">15+</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Job Description</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Describe the roles and responsibilities,skills required for the job and help the candidates understand the role better"
            ></textarea>
          </div>
          <br />
          <h4 style={{ color: "green" }}> Targeting</h4>
          <hr />
          <div class="row py-2">
            <div class="col-md-6">
              <label for="min exp">Category*</label>
              <select name="country" id="country" class="bg-light">
                <option value="five" selected>
                  select
                </option>
                <option value="Software ">Software Dev</option>
                <option value="Database Engineer">Database Engineer</option>
                <option value="Front End Dev">Front End Dev</option>
                <option value="Back End Dev  ">Back End Dev</option>
              </select>
            </div>
            <div class="col-md-6 pt-md-0 pt-3" id="lang">
              <label for="max exp">Functional Area*</label>
              <div class="arrow">
                <select name="category" id="category" class="bg-light">
                  <option value="category" selected>
                    select
                  </option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Content Creator">Content Creator</option>
                  <option value="Database">Database</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          Graduating Year
          <div class="row py-2">
            <div class="col-md-6">
              <label for="min exp"></label>
              <select name="country" id="country" class="bg-light">
                <option value="five" selected>
                  Min Batch
                </option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
              </select>
            </div>
            <div class="col-md-6 pt-md-0 pt-3" id="lang">
              <label for="max exp"></label>
              <div class="arrow">
                <select name="language" id="language" class="bg-light">
                  <option value="english" selected>
                    Max Batch
                  </option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <h5>Tags</h5>
          <div class="py-2">
            {/* <form action="/action_page.php"> */}
            <label for="fname"></label>
            <br />
            <Box sx={{ flexGrow: 1 }}>
              <form onSubmit={handleOnSubmit}>
                <TextField
                  inputRef={tagRef}
                  fullWidth
                  variant="standard"
                  size="small"
                  sx={{ margin: "1rem 0" }}
                  margin="none"
                  placeholder={tags.length < 5 ? "Enter tags" : ""}
                  InputProps={{
                    startAdornment: (
                      <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }}>
                        {tags.map((data, index) => {
                          return (
                            <Tags
                              data={data}
                              handleDelete={handleDelete}
                              key={index}
                            />
                          );
                        })}
                      </Box>
                    ),
                  }}
                />
              </form>
            </Box>
            {/* <select name="country" id="country" class="bg-light">
                <option value="five" selected>
                  + Add job Tag
                </option>
                <option value="four">4</option>
                <option value="three">3</option>
                <option value="two">2</option>
              </select> */}
            {/* </form> */}
          </div>
          <form action="/v1jobs/job" method="POST">
            <div class="py-3 pb-4 border-bottom">
              <button class="btn btn-primary mr-3">Post Job</button>
              <button class="btn btn-pr">Post Job And Add Another Job</button>
              <button class="btn border button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
