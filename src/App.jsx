import React, { useState } from 'react'
import './index.css'
import containerImage from './Container (2).png'
import buttonImage from './Button.png'
import questionImage from './question_mark.png'
import profileImage from './profile.png'
import findbtn from './find_bt.png'
import plusImage from './Frame.svg'
import dropdownImage from './dropdown.svg'
import frameImg from './Frame.jpg'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarExpanded, setSidebarExpanded] = useState(true)

  return (
    <>
      <header className="w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-6">

            <div className="flex items-center gap-3 flex-shrink-0 absolute left-4">
              <button className="block sm:hidden p-2 rounded hover:bg-gray-100" aria-label="Open menu" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>

              <div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded">LF</div>
              <span className="hidden sm:inline-block font-semibold text-gray-900">LeadFlow</span>
              <nav className="hidden sm:flex text-sm text-gray-500 items-center gap-2">
                <span>Home</span>
                <span>/</span>
                <span className="text-gray-800">Dashboard</span>
              </nav>
            </div>

            <div className="hidden sm:flex flex-1 mx-4 px-6 justify-center">
              <div className="max-w-lg mx-auto relative w-full">
                <input
                  className="w-full border border-gray-200 rounded py-2 px-3 text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  placeholder="Search leads, contacts, deals..."
                />
                <img src={findbtn} alt="find" className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center gap-3 absolute right-4">
              <button className="hidden md:inline-flex bg-black text-white px-4 py-2 rounded items-center gap-2">
                <img src='https://img.icons8.com/win10/512/FFFFFF/plus.png' alt="plus" className="w-4 h-4" />
                Add Lead
              </button>

              <button className="p-2 rounded hover:bg-gray-100" aria-label="Notifications">
                <div className="relative">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-400 rounded-full ring-2 ring-white" />
                </div>
              </button>

              <button className="hidden sm:inline-flex p-2 rounded hover:bg-gray-100" aria-label="Help">
                <img src={questionImage} alt="help" className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 flex-shrink-0">
                <img src={profileImage} alt="profile" className="w-8 h-8 object-cover" />
                <div className="hidden sm:block text-sm">
                  <div className="font-medium">John Doe</div>
                  <div className="text-xs text-gray-500">Admin</div>
                </div>
                <img src={dropdownImage} alt="dropdown" className="hidden sm:block w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={() => setSidebarOpen(false)} />
        )}

        <aside className={`fixed lg:relative lg:flex flex-col bg-white border-r border-gray-200 z-50 h-dvh lg:h-auto overflow-y-auto transition-all duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${sidebarExpanded ? 'w-64' : 'w-20'}`}>
          {!sidebarExpanded ? (
            <nav className="flex-1 overflow-y-auto py-4 px-3 gap-2 flex flex-col">
              <button className="p-3 rounded-lg bg-blue-50 flex items-center justify-center relative" title="Dashboard">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H3v6h6V3zm0 12H3v6h6v-6zm12-12h-6v6h6V3zm0 12h-6v6h6v-6z" /></svg>
              </button>

              <button className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center relative" title="Leads">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-2a6 6 0 0112 0v2z" /></svg>
                <span className="absolute -right-1 -top-1 w-2 h-2 bg-blue-500 rounded-full" />
              </button>

              <button className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Pipeline">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </button>

              <button className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Analytics">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </button>

              <button className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Activities">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </button>

              <button className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Campaigns">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </button>

              <button className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Documents">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </button>

              <button className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Teams">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-2a6 6 0 0112 0v2z" /></svg>
              </button>

              <button className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Favorites">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </button>

              <button className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center relative" title="Calendar">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span className="absolute -right-1 -top-1 w-2 h-2 bg-blue-500 rounded-full" />
              </button>

              <button className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Automation">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </button>

              <button className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Phone">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="absolute -right-1 -top-1 w-2 h-2 bg-blue-500 rounded-full" />
              </button>

              <button className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Email">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </button>

              <div className="flex-1" />

              <button className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Settings">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
              </button>

              <button onClick={() => setSidebarExpanded(true)} className="p-3 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Expand">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </nav>
          ) : (
            <>
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start gap-3">
                  <img src={frameImg} alt="Education Center" className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">Education Center</h3>
                    <p className="text-sm text-gray-500">Workspace</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              <nav className="flex-1 overflow-y-auto py-4">
                <div className="px-4 mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Main Menu</p>
                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium text-sm mb-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H3v6h6V3zm0 12H3v6h6v-6zm12-12h-6v6h6V3zm0 12h-6v6h6v-6z" /></svg>
                    Dashboard
                    <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded">1</span>
                  </button>

                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 text-sm mb-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-2a6 6 0 0112 0v2z" /></svg>
                    Leads
                    <span className="ml-auto text-gray-400 text-xs">5</span>
                  </button>

                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 text-sm mb-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    Pipeline
                  </button>

                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 text-sm mb-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Analytics
                  </button>

                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 text-sm mb-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Activities
                  </button>

                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 text-sm mb-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                    Campaigns
                  </button>

                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 text-sm mb-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    Documents
                  </button>

                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-2a6 6 0 0112 0v2z" /></svg>
                    Teams
                  </button>
                </div>

                <div className="px-4 mb-6 border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Quick Access</p>
                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 text-sm mb-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    Hot Leads
                  </button>

                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 text-sm mb-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    Follow-ups
                    <span className="ml-auto text-gray-400 text-xs">3</span>
                  </button>

                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    High Priority
                  </button>
                </div>
              </nav>

              <div className="border-t border-gray-200 p-4">
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 text-sm mb-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
                  Settings
                </button>
                <button onClick={() => setSidebarExpanded(false)} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  Collapse
                </button>
              </div>
            </>
          )}
        </aside>

        <main className="flex-1 p-4 sm:p-6 bg-gray-50 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="text-gray-600 text-sm mt-2">Welcome back, here's what's happening today.</p>
            </div>

            <div className="flex gap-4 mb-8">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg>
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Export
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-600 text-sm mb-2">Total Leads</p>
                <div className="flex items-end justify-between">
                  <h2 className="text-3xl font-bold text-gray-900">1,248</h2>
                  <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                    +12.5%
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m0 0l4 4m10-4v12m0 0l4-4m0 0l-4-4" /></svg>
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-600 text-sm mb-2">Conversion Rate</p>
                <div className="flex items-end justify-between">
                  <h2 className="text-3xl font-bold text-gray-900">3.2%</h2>
                  <span className="text-red-500 text-sm font-semibold flex items-center gap-1">
                    -8.4%
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-600 text-sm mb-2">Active Deals</p>
                <div className="flex items-end justify-between">
                  <h2 className="text-3xl font-bold text-gray-900">45</h2>
                  <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                    +8.2%
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m0 0l4 4m10-4v12m0 0l4-4m0 0l-4-4" /></svg>
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-600 text-sm mb-2">Revenue</p>
                <div className="flex items-end justify-between">
                  <h2 className="text-3xl font-bold text-gray-900">$24.5k</h2>
                  <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                    +15.3%
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m0 0l4 4m10-4v12m0 0l4-4m0 0l-4-4" /></svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Recent Leads</h3>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Lead Name</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Status</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Value</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Assigned To</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900 font-medium">Sarah Miller</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm"><span className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-xs sm:text-sm font-medium">New</span></td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900">$1,280</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900">JD</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">2 hrs ago</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900 font-medium">TechCorp Inc.</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm"><span className="bg-amber-50 text-amber-700 px-3 py-1 rounded text-xs sm:text-sm font-medium">Contacted</span></td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900">$5,480</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900">AS</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">1 hour ago</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900 font-medium">Design Studio</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm"><span className="bg-purple-50 text-purple-700 px-3 py-1 rounded text-xs sm:text-sm font-medium">Proposal</span></td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900">$3,280</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900">JS</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">3 hours ago</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900 font-medium">Global Logistics</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm"><span className="bg-red-50 text-red-700 px-3 py-1 rounded text-xs sm:text-sm font-medium">Negotiation</span></td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900">$12,508</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900">PK</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">5 hours ago</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900 font-medium">StartUp Hub</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm"><span className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-xs sm:text-sm font-medium">New</span></td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900">$850</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-900">AS</td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">1 day ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App;