"use client";
import { useState, useMemo, useCallback } from "react";
import { CardDataArray, DataMenu } from "@/data";
import ButtonModeToggle from "@/components/Button/ButtonModeToggle";
import FilterInput from "./components/FilterInput";
import FilterSelect from "./components/FilterSelect";
import CodeSnippet from "./components/CodeSnippet";

const FilteredCardList = () => {
    const [filters, setFilters] = useState({ title: "", role: "" });

    const handleFilterChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setFilters(prevFilters => ({
                ...prevFilters,
                [name]: value,
            }));
        },
        []
    );

    const filteredCardDataArray = useMemo(() => {
        const titleFilter = filters.title.toLowerCase();
        const roleFilter = filters.role;

        return CardDataArray.filter(({ title, roles }) =>
            title.toLowerCase().includes(titleFilter) &&
            (roleFilter === "" || roles.includes(roleFilter))
        );
    }, [filters]);

    // Opciones del select están predefinidas y no cambian, por lo que se usa useMemo
    const optionsCode = useMemo(() => [
        { id: 1, option: "Todos los roles", value: "" },
        { id: 2, option: "config", value: "config" },
        { id: 3, option: "basic", value: "basic" },
        { id: 4, option: "add", value: "add" },
        { id: 5, option: "branch", value: "branch" },
        { id: 6, option: "checkout", value: "checkout" },
        { id: 7, option: "clone", value: "clone" },
        { id: 8, option: "commit", value: "commit" },
        { id: 9, option: "diff", value: "diff" },
        { id: 10, option: "fetch", value: "fetch" },
        { id: 11, option: "log", value: "log" },
        { id: 12, option: "merge", value: "merge" },
        { id: 13, option: "push", value: "push" },
        { id: 14, option: "remote", value: "remote" },
        { id: 15, option: "status", value: "status" },
        { id: 16, option: "switch", value: "switch" },
    ], []);

    return (
        <article className="p-6 max-w-4xl mx-auto">
            <section className="flex flex-col sm:flex-row items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <FilterInput
                    name="title"
                    placeholder="Buscar por título..."
                    value={filters.title}
                    onChange={handleFilterChange}
                />
                <FilterSelect
                    name="role"
                    value={filters.role}
                    onChange={handleFilterChange}
                    options={optionsCode}
                />
                <ButtonModeToggle />
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredCardDataArray.length > 0 ? (
                    filteredCardDataArray.map((cardData: DataMenu) => (
                        <CodeSnippet key={cardData.id} {...cardData} />
                    ))
                ) : (
                    <p className="text-center text-navyBlue dark:text-lightGray">
                        No se encontraron resultados.
                    </p>
                )}
            </section>
        </article>
    );
};

export default FilteredCardList;
