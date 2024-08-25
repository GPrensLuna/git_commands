const FilterInput = ({
    name,
    placeholder,
    value,
    onChange,
}: {
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
    <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue dark:focus:ring-skyBlue transition duration-150 ease-in-out bg-lightGray dark:bg-charcoalGray text-gray-900 dark:text-lightGray uppercase"
    />
);

export default FilterInput;
