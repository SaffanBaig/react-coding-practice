import react, {useEffect} from 'react';
import useRoles from '../../hooks/useRoles';

const CustomHooks = () => {
    const [token, setToken] = useRoles()

    useEffect(() => {
        setToken('token', 'def1234')
    }, [])
    return(
        <h1>HOOKS</h1>
    )
}

export default CustomHooks;