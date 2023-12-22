import { IFiled } from ".";
import { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";

export interface IConfiguration {
  fields: IOption;
}
export interface IOption {
  [x: string]: string;
}

function SchemaClient({ fields }: { fields: IFiled[] }) {
  const [configurations, setConfigurations] = useState<IConfiguration>({
    fields: {},
  });
  const options: IOption[] | [] = configurations?.fields ?? [];

  const [selectedConfiguration, setSelectedConfiguration] =
    useState<string>("");

  useEffect(() => {
    if (fields.length > 0) {
      const updateConfigurations = fields?.map((field) => {
        const { key, title } = field;
        return { [key]: title };
      });
      setConfigurations({ fields: [...updateConfigurations] });
      console.log(
        "setSelectedConfiguration",
        updateConfigurations,
        Object.keys(updateConfigurations)
      );
      setSelectedConfiguration(Object.keys(updateConfigurations[0])[0]);
    }
  }, [fields]);

  const handleChange = (e) => {
    setSelectedConfiguration(e.target.value);
  };

  return (
    <div className={"schemaClient"}>
      {options && options?.length > 0 ? (
        <Select
          defaultValue={selectedConfiguration}
          value={selectedConfiguration}
          required
          placeholder={"Configuation"}
          label="Type"
          name={"key"}
          onChange={(e) => handleChange(e)}
        >
          {options?.map((configuration: IOption) => {
            const key = Object.keys(configuration)[0] as string;
            const value = configuration[key as keyof IOption] as string;
            return (
              <MenuItem value={key} key={key}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      ) : null}
    </div>
  );
}

export default SchemaClient;
