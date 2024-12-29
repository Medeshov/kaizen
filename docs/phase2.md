# Phase 2: Core Features Development

## Objectives
Build the essential functionalities for the Kaizen Planning SaaS, including task input, categorization, prioritization, and synchronization with Google Calendar.

---

## Tasks and Details

### 1. **Step-by-Step Forms**
#### Materializing Thoughts (`/pages/steps/materialize.tsx`)
- **Purpose**: Allow users to input raw ideas, goals, and tasks.
- **Features**:
  - A textarea for users to list multiple thoughts.
  - "Next" button to navigate to the next step.
  - Temporary storage in React state for entered tasks.
- **Implementation**:
  ```tsx
  import { useState } from 'react';
  
  export default function Materialize() {
    const [thoughts, setThoughts] = useState('');
    
    return (
      <div className="p-8">
        <h1 className="text-xl font-bold">Materialize Your Thoughts</h1>
        <textarea
          className="w-full mt-4 p-2 border"
          rows={10}
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
          placeholder="List your tasks or goals here..."
        />
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white">Next</button>
      </div>
    );
  }
  ```

#### Categorizing Tasks (`/pages/steps/categorize.tsx`)
- **Purpose**: Allow users to assign categories to tasks (e.g., "Personal Development," "Work").
- **Features**:
  - Display tasks from the previous step.
  - Dropdowns or drag-and-drop to categorize tasks.
  - Save categories to state or database.

#### Filtering Through Mission Statements (`/pages/steps/filter.tsx`)
- **Purpose**: Help users align tasks with their personal mission.
- **Features**:
  - Input field for the mission statement.
  - Checkbox or toggle to mark tasks that align with the mission.

#### Prioritizing Tasks (`/pages/steps/prioritize.tsx`)
- **Purpose**: Allow users to rank tasks by importance.
- **Features**:
  - Drag-and-drop interface to reorder tasks.
  - Save priority levels to the database.

### 2. **Consolidated Preview Page (`/pages/preview.tsx`)
- **Purpose**: Display all tasks with categories, mission alignment, and priorities.
- **Features**:
  - Editable sections for each task attribute.
  - "Finalize Plan" button to save the plan and prepare for export.
- **Implementation**:
  ```tsx
  export default function Preview() {
    const tasks = [
      { title: 'Learn TypeScript', category: 'Personal Development', priority: 1 },
      { title: 'Complete project report', category: 'Work', priority: 2 },
    ];
    
    return (
      <div className="p-8">
        <h1 className="text-xl font-bold">Preview Your Plan</h1>
        {tasks.map((task, index) => (
          <div key={index} className="mt-4 p-4 border">
            <h2 className="font-bold">{task.title}</h2>
            <p>Category: {task.category}</p>
            <p>Priority: {task.priority}</p>
          </div>
        ))}
        <button className="mt-4 px-6 py-2 bg-green-500 text-white">Finalize Plan</button>
      </div>
    );
  }
  ```

### 3. **Google Calendar Integration**
#### OAuth Implementation
- **Purpose**: Authenticate users to allow calendar synchronization.
- **Setup**:
  - Install `react-google-login`:
    ```bash
    npm install react-google-login
    ```
  - Create a Google Cloud project and obtain OAuth credentials.
  - Integrate the login component:
    ```tsx
    import { GoogleLogin } from 'react-google-login';
    
    const handleLogin = (response) => {
      console.log('Google Login Success:', response);
    };
    
    export default function CalendarAuth() {
      return (
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Connect Google Calendar"
          onSuccess={handleLogin}
          onFailure={(error) => console.error('Login Failed:', error)}
          cookiePolicy={'single_host_origin'}
        />
      );
    }
    ```

#### API Calls for Task Sync
- Use the Google Calendar API to create events:
  ```javascript
  const event = {
    summary: "Task Title",
    description: "Detailed task description",
    start: { dateTime: "2024-01-01T10:00:00Z" },
    end: { dateTime: "2024-01-01T11:00:00Z" },
  };
  
  fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });
  ```

### 4. **Data Management**
#### Database Schema
- **Tasks Schema**:
  ```javascript
  const TaskSchema = new Schema({
    title: String,
    category: String,
    priority: Number,
    missionAligned: Boolean,
  });
  ```
- Implement CRUD operations for tasks in `/api/tasks`.

---

## Deliverables
1. Fully functional step-by-step forms for task input and organization.
2. Consolidated preview page with editing options.
3. Integrated Google Calendar synchronization.
4. Basic backend APIs for task management.
