export const Selector = () => {
    return (
        <div className="">
            <select
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
                <option value="get">Get</option>
                <option value="post">Post</option>
                <option value="put">Put</option>
                <option value="delete">Delete</option>
            </select>
        </div>
    )
}
