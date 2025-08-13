import { useState } from 'react'

import './App.css'

function App() {
  // Bên trái
  const [hz1, setHz1] = useState('');
  const [ping1, setPing1] = useState('');
  // Bên phải
  const [hz2, setHz2] = useState('');
  const [ping2, setPing2] = useState('');

  // Hàm tính latency các trường hợp
  function latencyBest(rt: number) {
    return rt;
  }
  function latencyAvg(tf: number, rt: number) {
    return tf / 2 + rt;
  }
  function latencyWorst(tf: number, rt: number) {
    return tf + rt;
  }

  // Tính cho bên trái
  const frameTime1 = hz1 ? (1000 / Number(hz1)) : 0;
  const pingMs1 = ping1 ? Number(ping1) : 0;
  // Tính cho bên phải
  const frameTime2 = hz2 ? (1000 / Number(hz2)) : 0;
  const pingMs2 = ping2 ? Number(ping2) : 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-700 drop-shadow-lg tracking-wide">So sánh độ trễ</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {/* Bên trái */}
        <div className="flex-1 bg-white p-8 rounded-3xl shadow-xl border-2 border-blue-300">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Cấu hình 1</h2>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-semibold">Tần số màn hình (Hz):</label>
            <input
              type="number"
              className="w-full p-3 border-2 border-blue-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 shadow-sm hover:border-blue-500"
              value={hz1}
              onChange={e => setHz1(e.target.value)}
              placeholder="Ví dụ: 60"
              min={1}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-semibold">Ping mạng (ms):</label>
            <input
              type="number"
              className="w-full p-3 border-2 border-purple-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 shadow-sm hover:border-purple-500"
              value={ping1}
              onChange={e => setPing1(e.target.value)}
              placeholder="Ví dụ: 30"
              min={0}
            />
          </div>
          {hz1 && (
            <div className="mt-8 grid grid-cols-1 gap-4 text-lg text-gray-800 bg-blue-50 rounded-xl p-6 text-center">
              <div>
                <span className="font-bold text-green-600">Tốt nhất</span>: {latencyBest(pingMs1).toFixed(2)} ms
              </div>
              <div>
                <span className="font-bold text-blue-600">Trung bình</span>: {latencyAvg(frameTime1, pingMs1).toFixed(2)} ms
              </div>
              <div>
                <span className="font-bold text-red-600">Tệ nhất</span>: {latencyWorst(frameTime1, pingMs1).toFixed(2)} ms
              </div>
            </div>
          )}
        </div>
        {/* Bên phải */}
        <div className="flex-1 bg-white p-8 rounded-3xl shadow-xl border-2 border-pink-300">
          <h2 className="text-2xl font-bold mb-6 text-pink-600 text-center">Cấu hình 2</h2>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-semibold">Tần số màn hình (Hz):</label>
            <input
              type="number"
              className="w-full p-3 border-2 border-pink-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200 shadow-sm hover:border-pink-500"
              value={hz2}
              onChange={e => setHz2(e.target.value)}
              placeholder="Ví dụ: 144"
              min={1}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-semibold">Ping mạng (ms):</label>
            <input
              type="number"
              className="w-full p-3 border-2 border-purple-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 shadow-sm hover:border-purple-500"
              value={ping2}
              onChange={e => setPing2(e.target.value)}
              placeholder="Ví dụ: 10"
              min={0}
            />
          </div>
          {hz2 && (
            <div className="mt-8 grid grid-cols-1 gap-4 text-lg text-gray-800 bg-pink-50 rounded-xl p-6 text-center">
              <div>
                <span className="font-bold text-green-600">Tốt nhất</span>: {latencyBest(pingMs2).toFixed(2)} ms
              </div>
              <div>
                <span className="font-bold text-blue-600">Trung bình</span>: {latencyAvg(frameTime2, pingMs2).toFixed(2)} ms
              </div>
              <div>
                <span className="font-bold text-red-600">Tệ nhất</span>: {latencyWorst(frameTime2, pingMs2).toFixed(2)} ms
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App
