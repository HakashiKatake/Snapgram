import AuthLayout from './_auth/forms/AuthLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Home } from './_auth/_root/pages'
import RootLayout from './_auth/_root/RootLayout'
import './globals.css'
import { Routes , Route } from 'react-router-dom'


const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* Public Routes */}
            <Route element={<AuthLayout />} >
                <Route path='/sign-in' element={<SigninForm />} />
                <Route path='/sign-up' element={<SignupForm />} />
            </Route>
            
            {/* Private Routes */}
            <Route element={<RootLayout />} >
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </main>
  )
}

export default App



  