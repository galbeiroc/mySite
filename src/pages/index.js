import React from "react"
import Header from "../components/header"
import Repos from "../components/repos"
import MyCourses from '../components/myCourses'
import Medium from "../components/medium"
import EducationNav from '../components/education-nav';

export default () => (
  <div>
    <Header />
    <EducationNav />
    <Repos />
    <MyCourses />
    <Medium />
  </div>
)
