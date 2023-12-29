import { useEffect, useState } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { getSchemaByClient } from "../../utils/utils";
import { IFiled } from ".";

export interface IConfiguration {
  [fields: string]: string | undefined;
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
  const options = Object.values(config);

  const fieldMap = fields?.map((field) => {
    const { key, title } = field as IFiled;
    return { [key as string]: title };
  });

  const [selectedConfiguration, setSelectedConfiguration] = useState<string>(
    config["kipuConfig"]
  );

  const loadSchema = (selected: string) => {
    const clienConfig = getSchemaByClient(selected);

    setConfigurations({
      ...clienConfig,
      fields: Object.assign({}, ...fieldMap),
    });
  };

  useEffect(() => {
    loadSchema(selectedConfiguration);
  }, [fields, selectedConfiguration]);

  useEffect(() => {
    console.log("SchemaClient configurations", configurations, fields);
  }, [configurations, selectedConfiguration]);

  const handleChange = (e: SelectChangeEvent<string>): void => {
    loadSchema(e.target.value);
    setSelectedConfiguration(e.target.value);
  };

  return (
    <div className={"schemaClient"}>
      {options?.length > 0 ? (
        <Select
          defaultValue={selectedConfiguration}
          required
          placeholder={"Configuation"}
          label="Type"
          name="key"
          onChange={handleChange}
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
