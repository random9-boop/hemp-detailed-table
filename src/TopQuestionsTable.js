import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './components/ui/table';
import { Tabs, TabsList, TabsTrigger } from './components/ui/tabs';

const KeywordQuestionTable = () => {
  const [activeTab, setActiveTab] = useState('keywords');

  const keywords = [
    { rank: 1, keyword: "cbd gummies", volume: 209000 },
    { rank: 2, keyword: "delta 8", volume: 126000 },
    { rank: 3, keyword: "delta 8 thc", volume: 51000 },
    { rank: 4, keyword: "delta 8 vs delta 9", volume: 39000 },
    { rank: 5, keyword: "what is delta 8", volume: 37000 },
    { rank: 6, keyword: "delta 8 gummies", volume: 31000 },
    { rank: 7, keyword: "how long does delta 8 stay in your system", volume: 10000 },
    { rank: 8, keyword: "delta 8 vape", volume: 8100 },
    { rank: 9, keyword: "delta-8 side effects next day", volume: 7200 },
    { rank: 10, keyword: "hemp gummies", volume: 6300 },
    { rank: 11, keyword: "delta 8 carts", volume: 5800 },
    { rank: 12, keyword: "delta 8 resellers coupon code", volume: 5500 },
    { rank: 13, keyword: "difference between delta 8 and delta 9", volume: 5200 },
    { rank: 14, keyword: "hhc vs delta 8", volume: 5100 },
    { rank: 15, keyword: "delta 8 flower", volume: 4600 },
    { rank: 16, keyword: "delta 8 pen", volume: 4200 },
    { rank: 17, keyword: "delta 88", volume: 4200 },
    { rank: 18, keyword: "cbd gummies benefits", volume: 4100 },
    { rank: 19, keyword: "is delta 8 safe", volume: 4000 },
    { rank: 20, keyword: "delta 8 weed", volume: 3900 },
    { rank: 21, keyword: "delta 8 vs thc", volume: 3800 },
    { rank: 22, keyword: "is delta 8 legal in texas", volume: 3400 },
    { rank: 23, keyword: "delta 10 vs delta 8", volume: 3400 },
    { rank: 24, keyword: "delta 8 thc gummies", volume: 3300 },
    { rank: 25, keyword: "delta 8 disposable", volume: 3300 },
    { rank: 26, keyword: "cbd gummies 300mg", volume: 3100 },
    { rank: 27, keyword: "thcv gummies", volume: 3100 },
    { rank: 28, keyword: "cake delta 8", volume: 3100 },
    { rank: 29, keyword: "delta 8 drug test", volume: 3000 },
    { rank: 30, keyword: "delta 8 edibles", volume: 3000 },
    { rank: 31, keyword: "delta 8 vs delta 10", volume: 2900 },
    { rank: 32, keyword: "delta 8 texas", volume: 2800 },
    { rank: 33, keyword: "thc gummies legal", volume: 2800 },
    { rank: 34, keyword: "3chi delta 8", volume: 2600 },
    { rank: 35, keyword: "is delta 8 legal in florida", volume: 2400 },
    { rank: 36, keyword: "is delta 8 legal", volume: 2400 },
    { rank: 37, keyword: "delta 8 side effects", volume: 2200 },
    { rank: 38, keyword: "thc gummies side effects", volume: 2300 },
    { rank: 39, keyword: "peak 8 cbd gummies", volume: 2300 },
    { rank: 40, keyword: "thca gummies", volume: 2100 },
    { rank: 41, keyword: "delta 8 vape pens", volume: 2000 },
    { rank: 42, keyword: "thca vs delta 8", volume: 2000 },
    { rank: 43, keyword: "delta 8 cbd", volume: 2000 },
    { rank: 44, keyword: "delta 8 austin", volume: 1900 },
    { rank: 45, keyword: "delta 8 resellers legit", volume: 1900 },
    { rank: 46, keyword: "is delta 8 real weed", volume: 1800 },
    { rank: 47, keyword: "flying monkey delta 8", volume: 1700 },
    { rank: 48, keyword: "delta 8 vs delta 9 vs delta 10", volume: 1700 },
    { rank: 49, keyword: "cornbread hemp gummies", volume: 1600 },
    { rank: 50, keyword: "delta 8 drinks", volume: 1400 }
  ];

  const questions = [
    { rank: 1, question: "What is delta 8?", volume: 37000 },
    { rank: 2, question: "How long does delta 8 stay in your system?", volume: 10000 },
    { rank: 3, question: "What is delta 8 thc?", volume: 9300 },
    { rank: 4, question: "How long does delta-8 stay in your system urine test?", volume: 3000 },
    { rank: 5, question: "Why is delta-8 legal?", volume: 1900 },
    { rank: 6, question: "How to pass a drug test with delta-8 in your system?", volume: 1800 },
    { rank: 7, question: "How long does delta-8 stay in your urine reddit?", volume: 1800 },
    { rank: 8, question: "What is the difference between delta 8 and delta 9?", volume: 1600 },
    { rank: 9, question: "How much thc is in delta 8?", volume: 1600 },
    { rank: 10, question: "What does delta 8 do?", volume: 1300 },
    { rank: 11, question: "How is delta 8 made?", volume: 1000 },
    { rank: 12, question: "How long does delta 8 stay in urine?", volume: 900 },
    { rank: 13, question: "How long does it take for delta 8 to leave your system?", volume: 900 },
    { rank: 14, question: "How long is delta 8 in your system?", volume: 800 },
    { rank: 15, question: "How long does delta 8 stay in system?", volume: 800 },
    { rank: 16, question: "Why is delta 8 legal?", volume: 800 },
    { rank: 17, question: "What is delta 8 vs delta 9?", volume: 700 },
    { rank: 18, question: "What are delta 8 gummies?", volume: 600 },
    { rank: 19, question: "What are hemp gummies?", volume: 600 },
    { rank: 20, question: "What are hemp gummies used for?", volume: 600 },
    { rank: 21, question: "Delta 8 what is it?", volume: 500 },
    { rank: 22, question: "Where to buy delta 8?", volume: 500 },
    { rank: 23, question: "How long does it take delta 8 to leave your system?", volume: 500 },
    { rank: 24, question: "How long for delta 8 to leave system?", volume: 450 },
    { rank: 25, question: "How long does delta 8 effects last?", volume: 450 },
    { rank: 26, question: "How to get delta 8 out of your system?", volume: 450 },
    { rank: 27, question: "How long does delta 8 last?", volume: 450 },
    { rank: 28, question: "What is delta 8 and delta 9?", volume: 450 },
    { rank: 29, question: "How old do you have to be to buy delta 8?", volume: 450 },
    { rank: 30, question: "What is delta-8?", volume: 450 },
    { rank: 31, question: "How is delta 8 legal?", volume: 400 },
    { rank: 32, question: "How long will delta 8 stay in your system?", volume: 400 },
    { rank: 33, question: "How to clear delta-8 from your system?", volume: 400 },
    { rank: 34, question: "How long does it take to get delta 8 out of your system?", volume: 400 },
    { rank: 35, question: "How long do delta 8 gummies stay in your system?", volume: 350 },
    { rank: 36, question: "How long delta 8 stay in system?", volume: 350 },
    { rank: 37, question: "What does delta 8 look like?", volume: 350 },
    { rank: 38, question: "Where is delta 8 legal?", volume: 350 },
    { rank: 39, question: "What is in delta 8?", volume: 350 },
    { rank: 40, question: "Which is stronger delta 8 or delta 9?", volume: 350 },
    { rank: 41, question: "Where can I buy delta 8?", volume: 350 },
    { rank: 42, question: "What is delta 8 gummies?", volume: 300 },
    { rank: 43, question: "What is hemp gummies?", volume: 350 },
    { rank: 44, question: "What is stronger delta 8 or delta 9?", volume: 300 },
    { rank: 45, question: "How long do edibles stay in your system delta 8?", volume: 300 },
    { rank: 46, question: "What is delta 8?", volume: 300 },
    { rank: 47, question: "How strong is delta 8?", volume: 300 },
    { rank: 48, question: "Where to buy delta 8 near me?", volume: 300 },
    { rank: 49, question: "What is delta 8 flower?", volume: 300 },
    { rank: 50, question: "What is delta 8 weed?", volume: 300 }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">THC, CBD, and Hemp Keyword/Question Table</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
        <TabsList className="flex p-1 space-x-1 bg-blue-100 rounded-xl">
          <TabsTrigger 
            value="keywords" 
            className={`flex-1 py-2 text-sm font-medium text-blue-700 rounded-lg 
                        ${activeTab === 'keywords' ? 'bg-white shadow' : 'hover:bg-white/[0.12] hover:text-blue-800'}`}
          >
            Keywords
          </TabsTrigger>
          <TabsTrigger 
            value="questions" 
            className={`flex-1 py-2 text-sm font-medium text-blue-700 rounded-lg 
                        ${activeTab === 'questions' ? 'bg-white shadow' : 'hover:bg-white/[0.12] hover:text-blue-800'}`}
          >
            Questions
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-16 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</TableHead>
            <TableHead className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {activeTab === 'keywords' ? 'Keyword' : 'Question'}
            </TableHead>
            <TableHead className="w-24 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(activeTab === 'keywords' ? keywords : questions).map((item) => (
            <TableRow key={item.rank} className="bg-white">
              <TableCell className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.rank}</TableCell>
              <TableCell className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {item[activeTab === 'keywords' ? 'keyword' : 'question']}
              </TableCell>
              <TableCell className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{item.volume.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default KeywordQuestionTable;