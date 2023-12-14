import { TailSpin } from 'react-loader-spinner'


export  const Loader = ()=> {
    return (
       
<TailSpin
height="50"
width="50"
color="#1752b2"
ariaLabel="tail-spin-loading"
radius="1"
wrapperStyle={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',}}
wrapperClass=""
visible={true}
/>
    )
}


