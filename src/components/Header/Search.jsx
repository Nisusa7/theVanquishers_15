import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import { styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)`
    background: #A7D129;
    display: flex;
    margin-left:100px;
`
const InputSearchBase = styled(InputBase)`
    padding-left: 10px;
    width: 100%;
    font-size: unset;
`
const SearchIconWrapper = styled(Box)`
    color: #000000;
    margin-top: 3px;
`

const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase
                placeholder='Search here...'
            />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
        </SearchContainer>
    )
}
export default Search;