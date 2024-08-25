"use client";
import { useState, useMemo, useCallback } from "react";
import { CardDataArray, type DataMenu } from "@/ts";
import ButtonModeToggle from "@/components/Button/ButtonModeToggle";
import FilterInput from "./components/FilterInput";
import FilterSelect from "./components/FilterSelect";
import CodeSnippet from "./components/CodeSnippet";

const FilteredCardList = () => {
    const [filters, setFilters] = useState({ title: "", role: "" });

    const handleFilterChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [e.target.name]: e.target.value,
            }));
        },
        []
    );

    const filteredCardDataArray = useMemo(() => {
        return CardDataArray.filter((card: DataMenu) => {
            const matchesTitle = card.title.toLowerCase().includes(filters.title.toLowerCase());
            const matchesRole = filters.role === "" || card.roles.includes(filters.role);
            return matchesTitle && matchesRole;
        });
    }, [filters]);

    const optionsCode = useMemo(() => [
        { id: 1, option: "Todos los roles", value: "" },
        { id: 2, option: "config", value: "config" },
        { id: 3, option: "basic", value: "basic" },
        { id: 4, option: "add", value: "add" },
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
                    <p className="text-center text-navyBlue dark:text-lightGray">No se encontraron resultados.</p>
                )}
            </section>
        </article>
    );
};

export default FilteredCardList;
