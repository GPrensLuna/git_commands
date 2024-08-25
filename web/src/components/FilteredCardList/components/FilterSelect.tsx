const FilterSelect = ({
    name,
    value,
    onChange,
    options,
}: {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { id: number; option: string; value: string }[];
}) => (
    <select
        name={name}
        value={value}
        onChange={onChange}
        className="p-3 border rounded-lg shadow-sm bg-lightGray dark:bg-charcoalGray text-navyBlue dark:text-lightGray focus:outline-none focus:ring-2 focus:ring-lightBlue transition duration-150 ease-in-out min-w-40 uppercase"
    >
        {options.map((option) => (
            <option key={option.id} value={option.value}>
                {option.option}
            </option>
        ))}
    </select>
);

export default FilterSelect;
