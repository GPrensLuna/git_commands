"use client";
import React from "react";
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";
import ButtonModeToggle from "@/components/Button/ButtonModeToggle";

interface FilterControlsProps {
    title: string;
    role: string;
    onFilterChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    options: { id: number; option: string; value: string }[];
}

const FilterControls: React.FC<FilterControlsProps> = ({ title, role, onFilterChange, options }) => {
    return (
        <section className="flex flex-col sm:flex-row items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <FilterInput
                name="title"
                placeholder="Buscar por título..."
                value={title}
                onChange={onFilterChange}
            />
            <FilterSelect
                name="role"
                value={role}
                onChange={onFilterChange}
                options={options}
            />
            <ButtonModeToggle />
        </section>
    );
};

export default FilterControls;
