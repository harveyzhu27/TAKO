import React, { useState } from 'react';

type List = {
    id: string,
    projectId: string,
    name: string,
    tasksId: string[],
    order?: number,
    isUniversal: boolean
}
