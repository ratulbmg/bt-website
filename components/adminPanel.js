import React from 'react'
import { Tabs } from 'antd';

import ViewAndDeletePDFs from './admin/viewAndDeletePDFs';

const AdminPanel = () => {



    const tasks=[
        {
            label:"View and Delete PDFs",
            render:<ViewAndDeletePDFs/>
        },
        {
            label:"Post PDFs",
            render:(
                <div>
                    Post PDFs
                </div>
            )

        }
    ]



  return (
    <Tabs
    defaultActiveKey="1"
    centered
    size="large"
    items={new Array(tasks.length).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: tasks[i].label,
        key: id,
        children: tasks[i].render,
      };
    })}
  />
  )
}

export default AdminPanel
