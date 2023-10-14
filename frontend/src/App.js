const events = [
  {
    title: "This is an event haha",
    date: "Nov 1st",
    starttime: "09:30 GBT+1",
    time: "09:30 GBT+1 - 10:30 GBT+1",
    location: "Somewhere in a room",
    tags: ["THIS IS A TAG", "THIS IS ANOTHER TAG", "SO MANY TAGS"],
  },
  {
    title: "Lunch",
    date: "Nov 1st",
    starttime: "12:30 GBT+1",
    time: "12:30 GBT+1 - 13:30 GBT+1",
    location: "Fine restaurant",
    tags: ["THIS IS A TAG", "THIS IS ANOTHER TAG", "SO MANY TAGS"],
  },
];

function App() {
  return (
    <div className="flex flex-col border-2 h-screen">
      {/* Header */}
      <div className="flex justify-between bg-gray-200 p-2">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>
      {/* Title */}
      <div className="text-xl p-2">Agenda</div>
      {/* Tabs */}
      <div className="flex justify-between border-b-2">
        <div className="flex">
          <button className="px-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="px-1">All</button>
        </div>
        <div className="flex"> {/* TODO: implement dates & scrolling */} 
          <p>Nov 1st</p>
          <p>Nov 2nd</p>
          <p>Nov 3rd</p>
        </div>
        <button className="px-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      {/* Filters */}
      <div className="flex p-1 border-b-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
        </svg>
        <p className="px-2 font-light">Filters</p>
      </div>
      {/* Events */}
      <div className="flex-grow overflow-y-auto">
        {events.map((event, index) => (
          <div key={index} className="p-2">
            <p className="text-xs border-b-2 font-light">{event.starttime}</p>
            <p className="text-sm font-medium">{event.title}</p>
            <p className="text-xs font-light">{event.time}</p>
            <p className="text-xs font-light">{event.location}</p>
            <div className="flex flex-wrap border-b-2">
              {event.tags.map((tag, index) => (
                <div key={index} className="bg-gray-200 m-0.5 px-0.5 rounded-sm text-xs font-light">{tag}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
