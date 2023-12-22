import { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { getSchemaByClient } from "../../utils/utils";
import { IFiled } from ".";
export interface IConfiguration {
  [x: string]: string | undefined;
}

export enum config {
  kipuConfig = "Kipu",
  pceConfig = "PCE",
  credibleConfig = "Credible",
}

function SchemaClient({ fields }: { fields: IFiled[] }) {
  const [configurations, setConfigurations] = useState<IConfiguration | null>(
    null
  );
  console.log("configurations", configurations);

  const options = Object.values(config);
  const fieldMap = fields?.map((field) => {
    const { key, title } = field;
    return { [key]: title };
  });

  const [selectedConfiguration, setSelectedConfiguration] = useState<string>(
    config["kipuConfig"]
  );

  console.log(
    "fieldMap",
    fieldMap,
    "selectedConfiguration",
    selectedConfiguration
  );

  const loadSchema = (selected: string) => {
    const clienConfig = getSchemaByClient(selected);
    setConfigurations({ ...clienConfig, ["fields"]: fieldMap });
    setSelectedConfiguration(selected);
  };

  useEffect(() => {
    loadSchema(selectedConfiguration);
  }, []);

  const handleChange = (e) => {
    loadSchema(e.target.value);
  };

  return (
    <div className={"schemaClient"}>
      {options?.length > 0 ? (
        <Select
          defaultValue={selectedConfiguration}
          value={selectedConfiguration}
          required
          placeholder={"Configuation"}
          label="Type"
          name={"key"}
          onChange={(e) => handleChange(e)}
        >
          {options?.map((option: string) => {
            return (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      ) : null}
    </div>
  );
}

export default SchemaClient;
