import { useState } from 'react'

import './App.css'

function App() {
  const [hz, setHz] = useState('');
  const [ping, setPing] = useState('');

  // Độ trễ do tần số quét
  const frameTime = hz ? (1000 / Number(hz)) : 0;
  const pingMs = ping ? Number(ping) : 0;

  // Hàm tính latency các trường hợp
  function latencyBest(rt: number) {
    // Khung hình mới vừa bắt đầu quét và điểm bạn nhìn xuất hiện ngay đầu màn hình
    return rt;
  }

  function latencyAvg(tf: number, rt: number) {
    // Vị trí trung tâm màn hình (50% khung hình)
    return tf / 2 + rt;
  }

  function latencyWorst(tf: number, rt: number) {
    // Điểm bạn nhìn ở cuối màn hình (chờ quét hết khung hình)
    return tf + rt;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-xl border-2 border-blue-300">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-700 drop-shadow-lg tracking-wide">Tính Độ Trễ Tổng</h1>
        <div className="mb-8">
          <label className="block mb-3 text-xl font-semibold text-gray-800">Tần số màn hình (Hz):</label>
          <input
            type="number"
            className="w-full p-4 border-2 border-blue-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 shadow-sm hover:border-blue-500"
            value={hz}
            onChange={e => setHz(e.target.value)}
            placeholder="Ví dụ: 60"
            min={1}
          />
        </div>
        <div className="mb-8">
          <label className="block mb-3 text-xl font-semibold text-gray-800">Ping mạng (ms):</label>
          <input
            type="number"
            className="w-full p-4 border-2 border-purple-300 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 shadow-sm hover:border-purple-500"
            value={ping}
            onChange={e => setPing(e.target.value)}
            placeholder="Ví dụ: 30"
            min={0}
          />
        </div>
        {hz && (
          <div className="mt-10 grid grid-cols-1 gap-4 text-xl text-gray-800 bg-blue-50 rounded-2xl p-8 text-center">
            <div>
              <span className="font-bold text-green-600">Trường hợp tốt nhất</span>: {latencyBest(pingMs).toFixed(2)} ms
            </div>
            <div>
              <span className="font-bold text-blue-600">Trường hợp trung bình</span>: {latencyAvg(frameTime, pingMs).toFixed(2)} ms
            </div>
            <div>
              <span className="font-bold text-red-600">Trường hợp tệ nhất</span>: {latencyWorst(frameTime, pingMs).toFixed(2)} ms
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
