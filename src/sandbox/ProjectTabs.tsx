import React, { useState } from 'react';
import './ProjectTabs.css';

type Project = {
    id: string,
    title: string,
    description: string,
    order?: number,
    lists: string[]
}

function createProject(name: string){

}