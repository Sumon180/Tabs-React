// src/App.tsx

import Tab from './components/Tab';

function App() {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>Content for Tab 1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>Content for Tab 2</div>,
    },
    {
      label: 'Tab 3',
      content: <div>Content for Tab 3</div>,
    },
  ];

  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center mt-4">Tabs Example</h1>
      <Tab tabs={tabs} />
    </div>
  );
}

export default App;
