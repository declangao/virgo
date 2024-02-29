import { useState } from 'react';

import { Button } from './components/ui/button';
import { Checkbox } from './components/ui/checkbox';
import { Label } from './components/ui/label';
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { Switch } from './components/ui/switch';
import { data as initData, proficiency, tools } from './data';

function App() {
  const [editable, setEditable] = useState(true);
  const [data, setData] = useState<{
    isProficient: boolean;
    toolsUsed: string;
    firstName?: string;
  }>({
    ...initData,
  });

  const toolsUsedArr = data.toolsUsed.split(',');
  const proficiencyValue = data.isProficient ? 'yes' : 'no';

  const handleProcess = () => {
    console.log(data);
  };

  const handleCheckedChange = (index: number, checked: boolean) => {
    const arr = data.toolsUsed.split(',');
    const foundIdx = arr.indexOf(index.toString());
    if (foundIdx >= 0 && !checked) {
      arr.splice(foundIdx, 1);
    } else if (foundIdx === -1 && checked) {
      arr.push(index.toString());
    }
    const str = arr.join(',');
    const toolsUsed = str.startsWith(',') ? str.replace(',', '') : str;

    setData((prev) => ({
      ...prev,
      toolsUsed,
    }));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-sm p-8 space-y-4">
        <div className="flex justify-between items-center mb-4">
          <Label htmlFor="editable" className="text-base font-medium">
            Editable
          </Label>
          <Switch
            id="editable"
            checked={editable}
            onCheckedChange={(val) => {
              setEditable(val);
            }}
            className="w-[45px] h-[22px] shadow"
          />
        </div>

        <div className="">
          <div className="relative border hover:ring-2 hover:ring-ring rounded-lg">
            <input
              type="text"
              id="floatingLabelInput"
              disabled={!editable}
              onChange={(e) => {
                setData((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }));
              }}
              placeholder=""
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Label
              htmlFor="floatingLabelInput"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-muted-foreground peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 peer-disabled:opacity-30"
            >
              First Name
            </Label>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-bold text-lg">
            Are you proficient in ReactJS development?
          </p>
          <RadioGroup
            defaultValue={proficiencyValue}
            disabled={!editable}
            onValueChange={(val) => {
              setData((prev) => ({
                ...prev,
                isProficient: val === 'yes' ? true : false,
              }));
            }}
            className="space-y-2"
          >
            {proficiency.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  className="size-3 data-[state=unchecked]:border data-[state=unchecked]:border-primary data-[state=checked]:disabled:border-none data-[state=unchecked]:disabled:border-[#D8D8D8] data-[state=checked]:disabled:bg-[#D8D8D8] data-[state=checked]:disabled:opacity-100 data-[state=checked]:bg-primary peer"
                />
                <Label
                  htmlFor={option.id}
                  className="text-base font-normal peer-data-[state=unchecked]:text-muted-foreground"
                >
                  {option.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div>
            <p className="font-bold text-lg">Which tools do you use?</p>
            <p className="text-base font-normal text-muted-foreground">
              Please select all that apply
            </p>
          </div>

          {tools.map((tool, idx) => (
            <div key={tool.id} className="flex items-center space-x-2">
              <Checkbox
                id={tool.id}
                disabled={!editable}
                defaultChecked={toolsUsedArr.includes(idx.toString())}
                value={tool.id}
                onCheckedChange={(checked) => {
                  handleCheckedChange(idx, checked as boolean);
                }}
                className="size-3 rounded-full data-[state=checked]:disabled:border-none data-[state=unchecked]:disabled:border-[#D8D8D8] data-[state=checked]:disabled:bg-[#D8D8D8]"
              />
              <Label
                htmlFor={tool.id}
                className="text-base font-normal peer-data-[state=unchecked]:text-muted-foreground"
              >
                {tool.name}
              </Label>
            </div>
          ))}
        </div>

        <div className="w-full text-center pt-5">
          <Button
            onClick={handleProcess}
            disabled={!editable}
            className="w-[200px] h-[57px] rounded-full px-6 py-4"
          >
            Process
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
