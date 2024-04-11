import { useState } from 'react'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button } from "./components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import './App.css'
import { LogIn, Terminal } from 'lucide-react'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Crash from './Pages/Crash';
import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/HomePage';
import JobDetails from './Pages/JobDetails' 
import CreateJobs from './Pages/CreateJobs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<LandingPage />} />
        <Route path='/post-job' exact element={<CreateJobs />} />
        <Route path='/details' exact element={<JobDetails />} />
        <Route path='/home' exact element={<HomePage />} />
        <Route path='/sign-in' exact element={<Login />} />
        <Route path='/sign-up' exact element={<SignUp />} />
        <Route path='/*' exact element={<Crash />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
