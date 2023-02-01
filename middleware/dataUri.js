import DataURIParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
  const parser = new DataURIParser();
  const extname = path.extname(file?.originalname).toString();

  console.log(extname);
  return parser.format(extname, file.buffer);
};

export default getDataUri;
