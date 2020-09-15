'use strict';
let test = 
[
  [
    "https://media3.giphy.com/media/fTzV3m753QrFSkvrm5/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media2.giphy.com/media/Xb6QR0t45igkwwVXr6/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media1.giphy.com/media/QAao66eV61aicLAnDc/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media2.giphy.com/media/W2nHlm8EaGurmWLiuH/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/RiWiGCeDKBjDcDE1Dt/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/Srzor6ErxsOCXt9Pv4/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media0.giphy.com/media/YSZG363v43RmEByQjZ/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/lSDEH97CMV5B8TzEh2/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media1.giphy.com/media/Xc9XJ8poD8cE7SSopt/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media3.giphy.com/media/cMVgEhDeKzPwI/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media2.giphy.com/media/iKBAAfYNDu1dowhnEj/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "150"
  ],
  [
    "https://media0.giphy.com/media/Vz1cEfM0VFpII/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "150"
  ],
  [
    "https://media2.giphy.com/media/XGJryFatooiS4f1ClX/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media0.giphy.com/media/kcaJB1pAWP2qrmI5Io/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media3.giphy.com/media/3rgXBroGwOuAScNQfm/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "149"
  ],
  [
    "https://media3.giphy.com/media/RlICzK2icCPwBZMXEO/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/l2SpXgCUqjj8j4NsA/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "138"
  ],
  [
    "https://media2.giphy.com/media/l4Ho7SK3eN5kyo4OQ/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media0.giphy.com/media/3o6YgoY0GU0Yah2ujK/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "133"
  ],
  [
    "https://media0.giphy.com/media/XEmTU9YxsxYESl6JPh/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "160"
  ],
  [
    "https://media2.giphy.com/media/3osxY7np4sOcEK4LqU/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "121"
  ],
  [
    "https://media1.giphy.com/media/26uf2aKs23OLN9j7q/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "111"
  ],
  [
    "https://media3.giphy.com/media/f6zXzpkoUDGjmsnDPm/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media3.giphy.com/media/l4FGwPy7AvHDkgr60/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "133"
  ],
  [
    "https://media3.giphy.com/media/m9vH03ZZGcOrSR5ii2/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "84"
  ],
  [
    "https://media3.giphy.com/media/fTzV3m753QrFSkvrm5/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media2.giphy.com/media/Xb6QR0t45igkwwVXr6/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media1.giphy.com/media/QAao66eV61aicLAnDc/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media2.giphy.com/media/W2nHlm8EaGurmWLiuH/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/RiWiGCeDKBjDcDE1Dt/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/Srzor6ErxsOCXt9Pv4/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media0.giphy.com/media/YSZG363v43RmEByQjZ/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/lSDEH97CMV5B8TzEh2/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media1.giphy.com/media/Xc9XJ8poD8cE7SSopt/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media3.giphy.com/media/cMVgEhDeKzPwI/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media2.giphy.com/media/iKBAAfYNDu1dowhnEj/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "150"
  ],
  [
    "https://media0.giphy.com/media/Vz1cEfM0VFpII/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "150"
  ],
  [
    "https://media2.giphy.com/media/XGJryFatooiS4f1ClX/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media0.giphy.com/media/kcaJB1pAWP2qrmI5Io/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media3.giphy.com/media/3rgXBroGwOuAScNQfm/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "149"
  ],
  [
    "https://media3.giphy.com/media/RlICzK2icCPwBZMXEO/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/l2SpXgCUqjj8j4NsA/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "138"
  ],
  [
    "https://media2.giphy.com/media/l4Ho7SK3eN5kyo4OQ/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media0.giphy.com/media/3o6YgoY0GU0Yah2ujK/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "133"
  ],
  [
    "https://media0.giphy.com/media/XEmTU9YxsxYESl6JPh/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "160"
  ],
  [
    "https://media2.giphy.com/media/3osxY7np4sOcEK4LqU/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "121"
  ],
  [
    "https://media1.giphy.com/media/26uf2aKs23OLN9j7q/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "111"
  ],
  [
    "https://media3.giphy.com/media/f6zXzpkoUDGjmsnDPm/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media3.giphy.com/media/l4FGwPy7AvHDkgr60/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "133"
  ],
  [
    "https://media3.giphy.com/media/m9vH03ZZGcOrSR5ii2/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "84"
  ],
  [
    "https://media3.giphy.com/media/fTzV3m753QrFSkvrm5/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media2.giphy.com/media/Xb6QR0t45igkwwVXr6/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media1.giphy.com/media/QAao66eV61aicLAnDc/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media2.giphy.com/media/W2nHlm8EaGurmWLiuH/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/RiWiGCeDKBjDcDE1Dt/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/Srzor6ErxsOCXt9Pv4/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media0.giphy.com/media/YSZG363v43RmEByQjZ/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/lSDEH97CMV5B8TzEh2/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media1.giphy.com/media/Xc9XJ8poD8cE7SSopt/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media3.giphy.com/media/cMVgEhDeKzPwI/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media2.giphy.com/media/iKBAAfYNDu1dowhnEj/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "150"
  ],
  [
    "https://media0.giphy.com/media/Vz1cEfM0VFpII/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "150"
  ],
  [
    "https://media2.giphy.com/media/XGJryFatooiS4f1ClX/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media0.giphy.com/media/kcaJB1pAWP2qrmI5Io/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media3.giphy.com/media/3rgXBroGwOuAScNQfm/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "149"
  ],
  [
    "https://media3.giphy.com/media/RlICzK2icCPwBZMXEO/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/l2SpXgCUqjj8j4NsA/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "138"
  ],
  [
    "https://media2.giphy.com/media/l4Ho7SK3eN5kyo4OQ/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media0.giphy.com/media/3o6YgoY0GU0Yah2ujK/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "133"
  ],
  [
    "https://media0.giphy.com/media/XEmTU9YxsxYESl6JPh/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "160"
  ],
  [
    "https://media2.giphy.com/media/3osxY7np4sOcEK4LqU/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "121"
  ],
  [
    "https://media1.giphy.com/media/26uf2aKs23OLN9j7q/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "111"
  ],
  [
    "https://media3.giphy.com/media/f6zXzpkoUDGjmsnDPm/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media3.giphy.com/media/l4FGwPy7AvHDkgr60/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "133"
  ],
  [
    "https://media3.giphy.com/media/m9vH03ZZGcOrSR5ii2/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "84"
  ],
  [
    "https://media3.giphy.com/media/fTzV3m753QrFSkvrm5/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media2.giphy.com/media/Xb6QR0t45igkwwVXr6/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media1.giphy.com/media/QAao66eV61aicLAnDc/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media2.giphy.com/media/W2nHlm8EaGurmWLiuH/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/RiWiGCeDKBjDcDE1Dt/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/Srzor6ErxsOCXt9Pv4/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media0.giphy.com/media/YSZG363v43RmEByQjZ/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/lSDEH97CMV5B8TzEh2/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media1.giphy.com/media/Xc9XJ8poD8cE7SSopt/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media3.giphy.com/media/cMVgEhDeKzPwI/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media2.giphy.com/media/iKBAAfYNDu1dowhnEj/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "150"
  ],
  [
    "https://media0.giphy.com/media/Vz1cEfM0VFpII/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "150"
  ],
  [
    "https://media2.giphy.com/media/XGJryFatooiS4f1ClX/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media0.giphy.com/media/kcaJB1pAWP2qrmI5Io/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media3.giphy.com/media/3rgXBroGwOuAScNQfm/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "149"
  ],
  [
    "https://media3.giphy.com/media/RlICzK2icCPwBZMXEO/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ],
  [
    "https://media0.giphy.com/media/l2SpXgCUqjj8j4NsA/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "138"
  ],
  [
    "https://media2.giphy.com/media/l4Ho7SK3eN5kyo4OQ/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "200"
  ],
  [
    "https://media0.giphy.com/media/3o6YgoY0GU0Yah2ujK/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "133"
  ],
  [
    "https://media0.giphy.com/media/XEmTU9YxsxYESl6JPh/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "160"
  ],
  [
    "https://media2.giphy.com/media/3osxY7np4sOcEK4LqU/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "121"
  ],
  [
    "https://media1.giphy.com/media/26uf2aKs23OLN9j7q/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "111"
  ],
  [
    "https://media3.giphy.com/media/f6zXzpkoUDGjmsnDPm/200w_s.gif?cid=0c1deb63020b0fcef23f0ee6dc372d9d96e6ae26b233ea8c&rid=200w_s.gif",
    "200",
    "113"
  ]
];

let content = document.getElementById(1);
let minPadding = 10;
let maxPadding = false;
let padding = 0;
let contWidth = parseInt(getComputedStyle(content).width);
let imgWidth = test[0][1];
let count = Math.floor(contWidth / imgWidth);
if ((count * imgWidth + (count - 1) * minPadding) > contWidth) count = count - 1;
if (maxPadding) {
	minPadding = (contWidth - count * imgWidth) / (count+1);
} else {
	padding = (contWidth - (count * imgWidth + (count - 1) * minPadding) ) / 2;
};
let columnHeights = [];


function render(isAdding) {
    for (let i = 0; i <= test.length - 1; i = i + count) {
        for (let j = 0; j < count; j++) {

        	let colNum;

            if (!test[i + j]) {
                break;
            };

            columnHeights = [];

            let prev = content.querySelectorAll('img')[content.querySelectorAll('img').length - count];

            let top, left;

            if (prev) {
            	for (let n = 0; n < count; n++) {
		        	let column = document.querySelectorAll(`img[data-column="${n+1}"]`);
		        	let lastEl = column[column.length-1];
		        	let lastElTop = parseInt(getComputedStyle(lastEl).top);
		        	let lastElHeight = parseInt(getComputedStyle(lastEl).height);
		        	columnHeights.push(lastElTop+lastElHeight);
		        	// columnHeights.push(parseInt(getComputedStyle(lastEl).top+parseInt(getComputedStyle(lastEl).height)));
	        	};
	        	let minColumnNumber = columnHeights.indexOf(Math.min(...columnHeights));
	        	let minColumn = document.querySelectorAll(`img[data-column="${minColumnNumber+1}"]`);
	        	let minEl = minColumn[minColumn.length-1];
	        	if (prev != minEl) {
	        		prev = minEl;
	        	};
	        	colNum = prev.dataset.column;
                let prevTop = parseInt(getComputedStyle(prev).top);
                let prevHeight = parseInt(getComputedStyle(prev).height);
                top = prevTop + prevHeight + 10;
                left = parseInt(getComputedStyle(prev).left);
            } else {
            	top = 0;

            	if (maxPadding) {
            		left = (j > 0) ? j * imgWidth + minPadding * (j+1) : j * imgWidth + minPadding;
            	} else {
            		left = (j > 0) ? j * imgWidth + minPadding * j + padding : j * imgWidth + padding;
            	};
            	colNum = j+1;
            };

            let img = document.createElement('img');
            img.src = test[i + j][0];
            img.style.position = 'absolute';
            img.style.left = left + 'px';
            img.style.height = test[i + j][2];
            img.style.top = top + 'px';
            img.dataset.column = colNum;
            content.appendChild(img);
            columnHeights[img.dataset.column-1] = parseInt(getComputedStyle(img).top) + parseInt(getComputedStyle(img).height);
        };
    };

    // let maxTop = Array.from(document.querySelectorAll('img')).map((el) => parseInt(getComputedStyle(el).top))
    // .reduce((acc, cur)=>{ return (acc>=cur) ? acc : cur});
    // let maxImgHeight = parseInt(getComputedStyle(Array.from(document.querySelectorAll('img'))
    // 	.find((el)=> parseInt(getComputedStyle(el).top)==maxTop)).height);
    // let totalHeight = Array.from(content.querySelectorAll('img')).map((el) => parseInt(getComputedStyle(el).top)+parseInt(getComputedStyle(el).height))
    // .reduce((acc, cur)=>{ return (acc>=cur) ? acc : cur});

    content.style.height = Math.max(...columnHeights) + 10 + 'px';

    if (document.getElementById('more')) {
        document.getElementById('more').parentNode.removeChild(document.getElementById('more'));
    };

 //    let btn = document.createElement('button');
 //    btn.id = 'more';
 //    btn.innerText = 'More!';
 //    btn.style.position = 'absolute';
 //    btn.style.left = '50%';
 //    btn.style.position = 'absolute';
	// btn.style.bottom = '99999px';
	// document.body.append(btn);
 //    let test2 = parseInt(getComputedStyle(btn).height);

 //    content.style.height = Math.max(...columnHeights) + test2 + 30 + 'px';
 //    btn.style.bottom = '10px';
 //    content.append(btn);

 //    btn.addEventListener('click', (e) => {
 //        e.preventDefault();
 //        test.reverse();
 //        render(1);
 //    });
};

//render(0);

function infiniteList () {
	let windowHeight = document.documentElement.clientHeight;
	let loading = false;
	document.addEventListener('scroll', async function(e) {
		if ((windowHeight + 1 >= content.getBoundingClientRect().bottom)&&(loading==false)) {
			loading = true;
			let gif = new Image();
			gif.src = '2.gif';
			gif.style.margin = 'auto';
			gif.style.display = 'block';
			gif.style.position = 'absolute';
			gif.style.bottom = '99999px';

			function gifLoading () {
				return new Promise((resolve, reject) => {
					document.body.append(gif);
					gif.onload = resolve;
				});
			};
			gifLoading().then(()=>{
				let test = parseInt(getComputedStyle(gif).height);
				content.style.height = parseInt(getComputedStyle(content).height) + test + 20 + 'px';
				content.append(gif);
				gif.style.bottom = '10px';
				gif.style.left = '50%';
			});


			let timer = setTimeout(() => {
				render(1);
				gif.remove();	
				loading = false;
			}, 1000);
		};
	});

};

//infiniteList();


class Gallery {

	constructor (target, images, {minPadding = 10, maxPadding = false, qty = 25, infiniteLoad = true} = {}) {
		this.target = target;
		this.images = images;
		this.imageWidth = this.images[0][1]; // as the images width should be equal and be listed at [1] index in image's arr
		this.options = { minPadding, maxPadding, qty, infiniteLoad };
		this.columnHeights = [];
		this.times = 0;
		this.getGrid();
		this.getSwitch();
		this.render();
		return this;
	}

	getGrid () {
		let targetWidth = parseInt(getComputedStyle(this.target).width);
		this.count = Math.floor(targetWidth / this.imageWidth);
		if ((this.count * this.imageWidth + (this.count - 1) * this.options.minPadding) > targetWidth) this.count = this.count - 1;
		if (this.options.maxPadding) {
			this.options.padding = (targetWidth - this.count * this.imageWidth) / (this.count + 1);
		} else {
			this.options.sidePadding = (targetWidth - (this.count * this.imageWidth + (this.count - 1) * this.options.minPadding) ) / 2;
			this.options.padding = this.options.minPadding
		};
	}

	getSwitch () {
		let switchContainer = document.createElement('div');
		switchContainer.style.display = 'block';
		switchContainer.style.width = '100%';
		let switchbox = document.createElement('label');
		let checkbox = document.createElement('input');
		let slider = document.createElement('span');
		switchbox.classList.add('switch');
		checkbox.type = 'checkbox';
		slider.classList.add('slider');
		checkbox.checked = this.options.infiniteLoad;
		switchbox.appendChild(checkbox);
		switchbox.appendChild(slider);
		switchContainer.appendChild(switchbox);
		this.target.before(switchContainer);

		function checkboxHandler (e) {
			 this.setInfinite(e.target.checked);
		};

		checkbox.addEventListener('change', checkboxHandler.bind(this));
	}

	render() {
		this.firstImage = this.times*this.options.qty;
		this.lastImage = this.firstImage + this.options.qty - 1;
		if (!this.images[this.lastImage]) {
			this.lastImage = this.images.length - 1;
		};

		if (document.getElementById('more')) {
			document.getElementById('more').removeEventListener('click', this.moreBtnHandler);
        	document.getElementById('more').parentNode.removeChild(document.getElementById('more'));
    	};

	    for (let row = this.firstImage; row <= this.lastImage; row = row + this.count) { // rows: this.count images in 1 row
	        for (let column = 0; column < this.count; column++) { // columns

	            if ((!this.images[row + column])||((row + column > this.lastImage))) {
	                break;
	            };

	            let prevImg = this.target.querySelectorAll('img')[this.target.querySelectorAll('img').length - this.count];

	            this.columnHeights = [];
	            let top, left, colNum;

	            if (prevImg) {

	            	for (let n = 0; n < this.count; n++) { // save heights of all columns to put the image in column with min height
			        	let column = document.querySelectorAll(`img[data-column="${n+1}"]`);
			        	let lastImg = column[column.length-1];
			        	let lastImgTop = parseInt(getComputedStyle(lastImg).top);
			        	let lastImgHeight = parseInt(getComputedStyle(lastImg).height);
			        	this.columnHeights.push(lastImgTop+lastImgHeight);
		        	};

		        	let minColumnNumber = this.columnHeights.indexOf(Math.min(...this.columnHeights)); // find the number of column with min height
		        	let minColumn = document.querySelectorAll(`img[data-column="${minColumnNumber+1}"]`);
		        	let lastImgMinColumn = minColumn[minColumn.length-1];
		        	if (prevImg != lastImgMinColumn) prevImg = lastImgMinColumn;

	                let prevTop = parseInt(getComputedStyle(prevImg).top);
	                let prevHeight = parseInt(getComputedStyle(prevImg).height);
	                
	                top = prevTop + prevHeight + 10; // abs position by top + padding 10px
	                left = parseInt(getComputedStyle(prevImg).left);
	                colNum = prevImg.dataset.column;

	            } else { // for first row

	            	if (column == 0) {
	            		left = this.options.maxPadding ? this.options.padding : this.options.sidePadding;
	            	} else {
	            		left = this.options.maxPadding ? column*this.imageWidth + this.options.padding*(column+1) 
	            		: column*this.imageWidth + this.options.padding*column + this.options.sidePadding;
	            	};
	            	top = 0;
	            	colNum = column+1;
	            };

	            let img = document.createElement('img');
	            img.src = this.images[row + column][0];
	            let height = parseInt(this.images[row + column][2]);
	            img.style.position = 'absolute';
	            img.style.left = left + 'px';
	            img.style.height = height + 'px';
	            img.style.top = top + 'px';
	            img.dataset.column = colNum;
	            img.dataset.id = row + column;
	            this.target.appendChild(img);
	            this.columnHeights[img.dataset.column-1] = top + height; // as the new img was added into DOM, the height of column, in which img was added, should be updated (it could be the last iteration in cicle)
	        };
	    };
	    this.target.style.width = parseInt(getComputedStyle(this.target).width);
	    this.target.style.height = Math.max(...this.columnHeights) + 10 + 'px'; // set the container's height by height of max column + padding 10px
		
		this.times++;

		if (((this.images.length - 1) == this.lastImage)) {
			document.removeEventListener('scroll', this.infiniteHandler);
		} else {
			if (this.options.infiniteLoad) {
			this.setInfiniteLoad();
		} else {
			document.removeEventListener('scroll', this.infiniteHandler);
			this.setMoreBtn();
			
			};
		};

		

	}

	setInfinite(infiniteStatus) {
		this.options.infiniteLoad = infiniteStatus;
		if (this.options.infiniteLoad) {
			if (document.getElementById('more')) {
			document.getElementById('more').removeEventListener('click', this.moreBtnHandler);
        	document.getElementById('more').parentNode.removeChild(document.getElementById('more'));
    	};
			this.setInfiniteLoad();
			this.infiniteHandler();
		} else {
			document.removeEventListener('scroll', this.infiniteHandler);
			if ((this.images.length - 1) != this.lastImage) {
				this.setMoreBtn();
			};
		};
	}

	setInfiniteLoad() {
		let windowHeight = document.documentElement.clientHeight;
		let loading = false;
		if (!this.infiniteHandler) {
			this.infiniteHandler = async function(e) {
				if ((windowHeight + 1 >= this.target.getBoundingClientRect().bottom)&&(loading==false)) {
					loading = true;
					let gif = new Image();
					gif.src = '2.gif';
					gif.style.margin = 'auto';
					gif.style.display = 'block';
					gif.style.position = 'absolute';
					gif.style.bottom = '99999px';

					function gifLoading () {
						return new Promise((resolve, reject) => {
							document.body.append(gif);
							gif.onload = resolve;
						});
					};
					gifLoading().then(()=>{
						let gifHeight = parseInt(getComputedStyle(gif).height);
						this.target.style.height = parseInt(getComputedStyle(this.target).height) + gifHeight + 20 + 'px';
						this.target.append(gif);
						gif.style.bottom = '10px';
						gif.style.left = '50%';
					});


					let timer = setTimeout(() => {
						this.render();
						gif.remove();	
						loading = false;
					}, 1000);
				};
			};
			this.infiniteHandler = this.infiniteHandler.bind(this);
		};
		document.addEventListener('scroll', this.infiniteHandler);
	}

	setMoreBtn () {
		// if (document.getElementById('more')) {
  //       	document.getElementById('more').parentNode.removeChild(document.getElementById('more'));
  //   	};

		let btn = document.createElement('button');
		btn.id = 'more';
		btn.innerText = 'More!';
	    btn.style.position = 'absolute';
	    btn.style.left = '50%';
		btn.style.bottom = '99999px';
		document.body.append(btn);
	    let btnHeight = parseInt(getComputedStyle(btn).height);
	    let targetHeight = parseInt(getComputedStyle(this.target).height);
	    if ((targetHeight - btnHeight - 20) < 0) {
	    	this.target.style.height = targetHeight + btnHeight + 20 + 'px';
	    }

	    // this.target.style.height = parseInt(getComputedStyle(this.target).height) + btnHeight + 20 + 'px';
	    btn.style.bottom = '10px';
	    this.target.append(btn);

	    if (!this.moreBtnHandler) {
	    	this.moreBtnHandler = function (e) {
	    		e.preventDefault();
	        	this.render();
	    	};
	    	this.moreBtnHandler = this.moreBtnHandler.bind(this);
	    };

	    btn.addEventListener('click', this.moreBtnHandler);
	}

};

let gallery = new Gallery(document.getElementById(1), test, { qty: 10, infiniteLoad: false});