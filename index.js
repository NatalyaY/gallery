'use strict';
let test = [
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

class Gallery {

    constructor(target, images, { minPadding = 10, maxPadding = false, qty = 25, infiniteLoad = true } = {}) {
        this.target = target;
        this.images = images;
        this.imageWidth = this.images[0][1]; // as the images width should be equal and be listed at [1] index in image's arr
        this.options = { minPadding, maxPadding, qty, infiniteLoad };
        this.columnHeights = [];
        this.times = 0;
        this.getGrid();
        this.getFilters();
        this.render(true).then(()=>{return this});
        
    }

    getGrid() {
        this.targetWidth = parseInt(getComputedStyle(this.target).width);
        this.count = Math.floor(this.targetWidth / this.imageWidth);
        if ((this.count * this.imageWidth + (this.count - 1) * this.options.minPadding) > this.targetWidth) this.count = this.count - 1;
        if (this.options.maxPadding) {
            this.options.padding = (this.targetWidth - this.count * this.imageWidth) / (this.count + 1);
            this.options.sidePadding = this.options.padding;
        } else {
            this.options.sidePadding = (this.targetWidth - (this.count * this.imageWidth + (this.count - 1) * this.options.minPadding)) / 2;
            this.options.padding = this.options.minPadding
        };
    }

    getFilters() {

        this.filersBlock = document.createElement('div');
        this.filersBlock.classList.add('gallery__filters');

        let switchContainer = document.createElement('div');
        switchContainer.classList.add('switchContainer');

        let switchText = document.createElement('span');
        switchText.classList.add('switchText');
        switchText.innerText = 'Infinite load';

        // switchContainer.style.width = '100%';
        let switchbox = document.createElement('label');
        let checkbox = document.createElement('input');
        let slider = document.createElement('span');
        switchbox.classList.add('switch');
        checkbox.type = 'checkbox';
        slider.classList.add('slider');
        checkbox.checked = this.options.infiniteLoad;
        switchbox.appendChild(checkbox);
        switchbox.appendChild(slider);
        switchContainer.append(switchText);
        switchContainer.appendChild(switchbox);
        this.filersBlock.append(switchContainer);

        let qtySelectorContainer = document.createElement('div');
        qtySelectorContainer.classList.add('qtySelectorContainer');

        let qtyArr = [10, 25, 50, 100];

        qtyArr.forEach(function(elem) {
          let label = document.createElement('label');
          label.classList.add('qty__label');

          let radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = 'qty';
          radio.value = `${elem}`;
          radio.style.display = 'none';
          radio.classList.add('qty__radio');
          if (this.options.qty == elem) {
            radio.checked = true;
          };

          let span = document.createElement('span');
          span.classList.add('qty__span');
          span.innerText = `${elem}`;

          label.append(radio);
          label.append(span);
          qtySelectorContainer.append(label);
        }.bind(this));


        this.filersBlock.append(qtySelectorContainer);

        function qtyHandler(e) {
            this.setQty(parseInt(e.target.value));
        };

        qtySelectorContainer.addEventListener('change', qtyHandler.bind(this));

        let alinmentSelectorContainer = document.createElement('div');
        alinmentSelectorContainer.classList.add('alinmentSelectorContainer');

        [0, 1].forEach(function(elem) {
          let label = document.createElement('label');
          label.classList.add('alinment__label');

          let radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = 'alinment';
          radio.value = `${elem}`;
          radio.style.display = 'none';
          radio.classList.add('alinment__radio');

          if (this.options.maxPadding == elem) {
            radio.checked = true;
          };

          let btn = document.createElement('div');
          btn.classList.add('alinment__btn');

          let span = document.createElement('span');
          span.classList.add('alinment__span', `alinment__span-${elem}`);

          btn.append(span);

          label.append(radio);
          label.append(btn);
          alinmentSelectorContainer.append(label);
        }.bind(this));
        this.filersBlock.append(alinmentSelectorContainer);


        function alinmentHandler(e) {
            this.setAlinment(parseInt(e.target.value));
        };

        alinmentSelectorContainer.addEventListener('change', alinmentHandler.bind(this));



        this.target.append(this.filersBlock);


        function checkboxHandler(e) {
            this.setInfinite(e.target.checked);
        };

        checkbox.addEventListener('change', checkboxHandler.bind(this));

        this.imagesBlock = document.createElement('div');
        this.imagesBlock.classList.add('gallery__imagesBlock');
        this.imagesBlock.style.position = 'relative';
        this.target.append(this.imagesBlock);

        this.gif = new Image();
        this.gif.src = 'loader.gif';
        this.gif.style.margin = 'auto';
        this.gif.style.display = 'block';
        this.gif.style.position = 'absolute';
        this.gif.style.bottom = '99999px';
        this.gif.style.left = '50%';

        this.btn = document.createElement('button');
        this.btn.classList.add('filters__moreBtn');
        this.btn.innerText = 'More!';
        this.btn.style.position = 'absolute';
        this.btn.style.left = '50%';
        this.btn.style.bottom = '99999px';

        this.windowWeight = window.innerWidth;

        window.addEventListener('resize', ()=>{
          if (this.windowWeight == window.innerWidth) {
            return;
          };
          this.windowWeight = window.innerWidth;
          let times = this.times;
          this.times = 0;
          while (this.imagesBlock.firstChild) {
            this.imagesBlock.removeChild(this.imagesBlock.firstChild);
          };

          this.getGrid();


          this.render(true).then(async()=>{
            for(let i = 1; i < times; i++){
              await this.render(false);
              if ((i-times == -1)&&(!this.options.infiniteLoad)) {
                let maxHeight = Math.max(...Array.from(this.imagesBlock.querySelectorAll('img')).map((el)=>parseInt(el.style.height)+parseInt(el.style.top)));
                this.imagesBlock.style.height = (maxHeight + parseInt(getComputedStyle(this.btn).height) + 30 + 'px');
              };
            };
          });
        });
    }

    render(isFirstTime) {
      return new Promise((resolve, reject) => {
        this.firstImage = isFirstTime ? this.times * this.options.qty : this.imagesBlock.querySelectorAll('.gallery__img').length;
        // this.times * this.options.qty;
        this.lastImage = this.firstImage + this.options.qty - 1;
        if (!this.images[this.lastImage]) {
            this.lastImage = this.images.length - 1;
        };

        for (let row = this.firstImage; row <= this.lastImage; row = row + this.count) { // rows: this.count images in 1 row
            for (let column = 0; column < this.count; column++) { // columns

                if ((!this.images[row + column]) || ((row + column > this.lastImage))) {
                    break;
                };

                let prevImg = this.imagesBlock.querySelectorAll('img')[this.imagesBlock.querySelectorAll('img').length - this.count];

                this.columnHeights = [];
                let top, left, colNum;

                if (prevImg) {

                    for (let n = 0; n < this.count; n++) { // save heights of all columns to put the image in column with min height
                        let column = document.querySelectorAll(`img[data-column="${n+1}"]`);
                        let lastImg = column[column.length - 1];
                        let lastImgTop = parseInt(getComputedStyle(lastImg).top);
                        let lastImgHeight = parseInt(getComputedStyle(lastImg).height);
                        this.columnHeights.push(lastImgTop + lastImgHeight);
                    };

                    let minColumnNumber = this.columnHeights.indexOf(Math.min(...this.columnHeights)); // find the number of column with min height
                    let minColumn = document.querySelectorAll(`img[data-column="${minColumnNumber+1}"]`);
                    let lastImgMinColumn = minColumn[minColumn.length - 1];
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
                        left = this.options.maxPadding ? column * this.imageWidth + this.options.padding * (column + 1) :
                            column * this.imageWidth + this.options.padding * column + this.options.sidePadding;
                    };
                    top = this.options.sidePadding;
                    colNum = column + 1;
                };

                let img = document.createElement('img');
                img.classList.add('gallery__img')
                img.src = this.images[row + column][0];
                let height = parseInt(this.images[row + column][2]);
                img.style.position = 'absolute';
                img.style.left = left + 'px';
                img.style.height = height + 'px';
                img.style.top = top + 'px';
                img.dataset.column = colNum;
                img.dataset.id = row + column;
                img.style.opacity = "0%";
                this.imagesBlock.appendChild(img);
                let timer = setTimeout(() => {
                        img.style.opacity = "100%";
                    }, 0);

                
                this.columnHeights[img.dataset.column - 1] = top + height; // as the new img was added into DOM, the height of column, in which img was added, should be updated (it could be the last iteration in cicle)
            };
        };

        this.imagesBlock.style.height = Math.max(...this.columnHeights) + this.options.sidePadding + 'px'; // set the container's height by height of max column + padding 10px
            
        this.times++;

        if (parseInt(getComputedStyle(this.target).width) != this.targetWidth) {
          let sidePadding = this.options.sidePadding;
          this.getGrid();
          let shift = sidePadding - this.options.sidePadding;
          let images = Array.from(this.imagesBlock.querySelectorAll('img'));
          images.forEach(function(elem) {
            elem.style.left = parseInt(elem.style.left) - shift + 'px';
            elem.style.top = parseInt(elem.style.top) - shift + 'px';
          });
        };

        if (((this.images.length - 1) == this.lastImage)) {
            if (this.imagesBlock.getElementsByClassName('filters__moreBtn')[0]) {
                this.imagesBlock.getElementsByClassName('filters__moreBtn')[0].removeEventListener('click', this.moreBtnHandler);
                this.imagesBlock.getElementsByClassName('filters__moreBtn')[0].parentNode.removeChild(this.imagesBlock.getElementsByClassName('filters__moreBtn')[0]);
            } else {
                document.removeEventListener('scroll', this.infiniteHandler);
            };
        };

        if (isFirstTime && ((this.images.length - 1) != this.lastImage)) {
            if (this.options.infiniteLoad) {
                this.setInfiniteLoad();
            } else {
                this.setMoreBtn();

            };
        };
        resolve();

      });
        


    }

    setInfinite(infiniteStatus) {
        if ((this.images.length - 1) == this.lastImage) {
          this.options.infiniteLoad = infiniteStatus;
          return;
        };
        this.options.infiniteLoad = infiniteStatus;

        if (this.options.infiniteLoad) {
            if (this.imagesBlock.getElementsByClassName('filters__moreBtn')[0]) {
                this.imagesBlock.getElementsByClassName('filters__moreBtn')[0].removeEventListener('click', this.moreBtnHandler);
                this.imagesBlock.getElementsByClassName('filters__moreBtn')[0].parentNode.removeChild(this.imagesBlock.getElementsByClassName('filters__moreBtn')[0]);
            };
            this.setInfiniteLoad();

        } else {
            document.removeEventListener('scroll', this.infiniteHandler);
            this.setMoreBtn();
        };
    }

    setQty(qty) {
      if ((this.images.length - 1) == this.lastImage) {
        this.times = 0;
        this.options.qty = qty;
          while (this.imagesBlock.firstChild) {
            this.imagesBlock.removeChild(this.imagesBlock.firstChild);
          };
        this.render(true);
        return;
      };
      let diff = qty - this.options.qty;
      if (diff < 0) {
        diff = (this.options.qty*this.times > this.images.length) ? this.images.length - qty*this.times : -diff*this.times;
        for (let i = 0; i < diff; i++) {
          this.imagesBlock.removeChild(this.imagesBlock.querySelector('img:last-of-type'));
        };
      } else {
        this.options.qty = diff*this.times;
        this.render(false).then(()=>{
          this.options.qty = qty;
          this.times--;
        });
      };

      let maxHeight = Math.max(...Array.from(this.imagesBlock.querySelectorAll('img')).map((el)=>parseInt(el.style.height)+parseInt(el.style.top)));
      this.imagesBlock.style.height = (this.options.infiniteLoad) ? (maxHeight + this.options.sidePadding + 'px') 
      : (maxHeight + parseInt(getComputedStyle(this.btn).height) + 30 + 'px');
      this.options.qty = qty;
      if (this.options.infiniteLoad) {
       this.infiniteHandler();
      };
    }

    setAlinment(maxPadding) {
      let count = this.count;
      this.options.maxPadding = maxPadding;
      this.getGrid();
      if (this.count != count) {
        let times = this.times;
          this.times = 0;
          while (this.imagesBlock.firstChild) {
            this.imagesBlock.removeChild(this.imagesBlock.firstChild);
          };

          this.render(true).then(()=>{
            for(let i = 1; i < times; i++){
              this.render(false);
            };
          });
      } else {
        this.imagesBlock.querySelectorAll('img').forEach(function(elem) {
          let column = elem.dataset.column - 1;
          let left, top;
          let prevImg = this.imagesBlock.querySelector(`img[data-id='${elem.dataset.id - this.count}']`);
          if (prevImg) {
            let prevTop = parseInt(getComputedStyle(prevImg).top);
                    let prevHeight = parseInt(getComputedStyle(prevImg).height);

                    top = prevTop + prevHeight + 10; // abs position by top + padding 10px
                    left = parseInt(getComputedStyle(prevImg).left);
           
          } else {
           if (column == 0) {
               left = this.options.maxPadding ? this.options.padding : this.options.sidePadding;
            } else {
                left = this.options.maxPadding ? column * this.imageWidth + this.options.padding * (column + 1) :
                column * this.imageWidth + this.options.padding * column + this.options.sidePadding;
            };
            top = this.options.sidePadding;
          };

            elem.style.top = top + 'px';
            elem.style.left = left + 'px';

        }.bind(this));
    };
  }

    setInfiniteLoad() {
        let loading = false;
        
        if (!this.infiniteHandler) {
            this.infiniteHandler = async function(e) {
                if ((window.innerHeight + 1 >= this.imagesBlock.lastChild.getBoundingClientRect().bottom) && (loading == false)) {
                    loading = true;
                    this.imagesBlock.append(this.gif);
                    this.gif.style.left = '50%';
                    this.gif.style.transform = 'translateX(-50%)';
                    let gifHeight = parseInt(getComputedStyle(this.gif).height);
                    this.imagesBlock.style.height = parseInt(this.imagesBlock.style.height) - this.options.sidePadding + gifHeight + 30 + 'px';
                    let bottomSpace = (gifHeight + 30)/2;
                    this.gif.style.bottom = `${bottomSpace}px`;
                    this.gif.style.transform = 'translate(-50%, 50%)'

                    let timer = setTimeout(() => {
                     this.render(false)
                          .then(()=>{
                            this.gif.remove();
                            loading = false;
                          });
                    }, 1000);
                };
            };
            this.infiniteHandler = this.infiniteHandler.bind(this);
        };
        document.addEventListener('scroll', this.infiniteHandler);
        this.infiniteHandler();
    }

    setMoreBtn() {
        this.imagesBlock.append(this.btn);
        let btnHeight = parseInt(getComputedStyle(this.btn).height);
        this.imagesBlock.style.height = Math.max(...this.columnHeights) + btnHeight + 30 + 'px';
        let bottomSpace = (btnHeight + 30)/2;
        this.btn.style.bottom = `${bottomSpace}px`;
        this.btn.style.transform = 'translate(-50%, 50%)'

        if (!this.moreBtnHandler) {
            this.moreBtnHandler = function(e) {
                e.preventDefault();
                this.render(false).then(()=>{
                  if (((this.images.length - 1) != this.lastImage)) {
                    this.imagesBlock.style.height = Math.max(...this.columnHeights) + btnHeight + 30 + 'px';
                };
                });
                
            };
            this.moreBtnHandler = this.moreBtnHandler.bind(this);
        };

        this.btn.addEventListener('click', this.moreBtnHandler);
    }

};

let gallery = new Gallery(document.getElementById('gallery'), test, { qty: 25, infiniteLoad: true, maxPadding: true });
