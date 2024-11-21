import { ChangeEvent } from "react";
import { CustomSelectorWrapper, StyledSelect } from "./Selector.styles";
import { SelectorOption } from "./Selector.types";

interface SelectorProps {
  onChange?: (value: string | number) => void;
  options?: SelectorOption[];
  placeholder: string;
  testId?: string;
  value?: string | number;
}

export const Selector = ({
  onChange,
  options,
  placeholder,
  testId,
  value,
}: SelectorProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <CustomSelectorWrapper>
      <StyledSelect data-testid={testId} value={value} onChange={handleChange}>
        <option value={""} disabled>
          {placeholder}
        </option>
        {options?.map((option, key) => (
          <option key={key} value={option.value}>
            {option.label ?? option.value}
          </option>
        ))}
      </StyledSelect>
    </CustomSelectorWrapper>
  );
};
