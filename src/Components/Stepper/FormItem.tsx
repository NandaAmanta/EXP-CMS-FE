import { useState } from "react";

interface FormItemProps {
    item: any;
    onChange: (value: any, category: any) => void;
    answer: any;
}

export const FormItem: React.FC<FormItemProps> =  ({ item, onChange, answer })  => {
  const [currentValue, setCurrentValue] = useState(answer || null);

  const handleChange = (value: any) => {
    setCurrentValue(value);
    onChange(value, item.value);
  }

   switch (item.type) {
      case 'text':
        return (
          <>
            <label>{item.label}</label>
            <input
              type="text"
              id={item.label}
              onChange={(e) => handleChange(e.target.value, item.value)}
              value={currentValue}
            />
          </>
        )
        break;
      case 'password':
        return (
          <>
            <label htmlFor="inputPassword5">{item.label}</label>
            <input
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              onChange={(e) => onChange(e.target.value, item.value)}
            />
          </>
        )
        break;
      case 'information':
        return (
          <p>
            {item.label}
          </p>
        )
      case 'select':
        return (
          <div className="mt-2">
            <select aria-label={item.label} onChange={(e) => onChange(e.target.value, item.value)}>
              <option>{item.label}</option>
              {
                item.options.map((opt, index) => {
                  return (
                    <option value={opt}>{opt}</option>
                  )
                })
              }
            </select>
          </div>
        )

      return (
        <></>
      )
    }
  };