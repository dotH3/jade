interface Props {
    elements: { title: string, value: string }[]
    value: string
    setValue: (value: string) => void
}

export const Selector = ({ elements, value, setValue }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <select
                value={value}
                onChange={handleChange}
                data-select='{
          "placeholder": "Select option...",
          "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
          "toggleClasses": "advance-select-toggle",
          "dropdownClasses": "advance-select-menu",
          "optionClasses": "advance-select-option selected:active",
          "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[tabler--check] flex-shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
          "extraMarkup": "<span class=\"icon-[tabler--caret-up-down] flex-shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
        }'
                className="hidden!"
            >
                <option value="">Choose</option>
                {elements.map((el) => (
                    <option key={el.value} value={el.value}>
                        {el.title}
                    </option>
                ))}
            </select>
        </div>
    );
};
