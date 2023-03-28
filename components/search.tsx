import { ChangeEvent } from "react"

export const Search: React.FC<{ setSearch: any }> = ({ setSearch })  => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    
    return (
        <>     
            <input
            id="search"
            type="search"
            className="w-[300px] px-4 py-2 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Search..."
            onChange={e => handleChange(e)}
            />
        </>
    )
}