import { ChangeEvent } from "react"

export const Search: React.FC<{ setSearch: any }> = ({ setSearch })  => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value.toLowerCase())
    }
    
    return (
        <>     
            <input
            id="search"
            type="search"
            className="form-control me-2"
            style={{ width: 400 }}
            placeholder="Search..."
            onChange={e => handleChange(e)}
            />
        </>
    )
}