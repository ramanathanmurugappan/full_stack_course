import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
// const App_usestate =()=>{
//     const[Count,setCount]=useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount((Count)=>Count+1);
//         },1000);
//     });
//     return(<h1>{Count}</h1>);
// };


const BackgroundChanger = () => {
  const [backgroundImage, setBackgroundImage] = useState('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',);

  const images =[
    'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setBackgroundImage(images[index]);
      index = (index + 1) % images.length;
    }, 3000);
  
    return () => clearInterval(interval);
  }, 3000);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    backgroundColor: 'transparent',
    backgroundBlendMode: 'multiply',
  };

  return(<><div style={backgroundStyle}></div>
    {/* <div>
    <Link to={"/crud"}>Crud</Link>
    </div> */}
  </>) 
};

export default BackgroundChanger;

// export default App_usestate;
