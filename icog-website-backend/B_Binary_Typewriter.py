n = int(input())
for _ in range(n):
    n = int(input())
    a = input()
    t = ''
    if a[0]=='1':
        # o = a.find('0')
        last0 = a.find('1', 1)
        if last0 == -1:
            last0 = n-1
        # print(last0,a)  
        t  = a[0:last0+1][::-1] + a[last0 +1:] 

    
    if len(a)>=4:
        o1 = a.find('01')
        o2 = a.find('10')
        if o1!=-1:
            if a.find('01')!=-1:
                o2 = a.find('01', o1+2)
                a = a[:o1+1] + a[o1+1:o2+1][::-1] + a[o2+1:]
        elif o2!=-1:
            if a.find('10')!=-1:
                o1 = a.find('10', o2+2)
                a = a[:o2+1] + a[o2+1:o1+1][::-1] + a[o1+1:]
    
    bit = 0 
    # print(a)
    ans = 0
    for i in a:
        if i=='1':
            if bit==0:
                bit = 1
                ans += 2 
            else:
                ans +=1 
        else:
            if bit==1:
                bit = 0
                ans += 2 
            else:
                ans +=1
    ans2 = None
    if t:
        ans2= 0 
        bit = 0 
        for i in t:
            if i=='1':
                if bit==0:
                    bit = 1
                    ans2 += 2 
                else:
                    ans2 +=1 
            else:
                if bit==1:
                    bit = 0
                    ans2 += 2 
                else:
                    ans2 +=1
        if ans2<ans:
            ans = ans2


    print(ans)
