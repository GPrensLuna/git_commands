"use client";
import { useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { CardDataArray, DataMenu } from "@/data";
import FilterControls from "./components/FilterControls";
import CodeSnippet from "./components/CodeSnippet";

const FilteredCardList = () => {
    const searchParams = useSearchParams();

    const title = searchParams.get("title") || "";
    const role = searchParams.get("role") || "";

    const handleFilterChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            window.history.replaceState(null, "", `?${params.toString()}`);
        },
        [searchParams]
    );

    const filteredCardDataArray = useMemo(() => {
        const titleFilter = title.toLowerCase();
        const roleFilter = role;

        return CardDataArray.filter(({ title, roles }) =>
            title.toLowerCase().includes(titleFilter) &&
            (roleFilter === "" || roles.includes(roleFilter))
        );
    }, [title, role]);

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
        <article className="p-6 max-w-screen-2xl mx-auto">
            <FilterControls
                title={title}
                role={role}
                onFilterChange={handleFilterChange}
                options={optionsCode}
            />
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
