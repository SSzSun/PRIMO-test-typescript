# PRIMO-test-typescript

ฟังก์ชัน `merge` นี้รวม 3 อาร์เรย์ของตัวเลขที่มีลำดับเรียงแล้วโดยไม่ใช้ `.sort()` และให้ผลลัพธ์เป็นอาร์เรย์เรียงจากน้อยไปมาก

เงื่อนไขของ `input`
- collection_1 และ collection_3 เรียง จากน้อยไปมาก
- collection_2 เรียง จากมากไปน้อย
- ผลลัพธ์ต้องรวมทั้งหมดแล้วเรียงจากน้อยไปมาก

### **ข้อห้าม : ห้ามใช้ฟังก์ชัน .sort()

## การติดตั้งและใช้งาน
### 1) ติดตั้ง Bun

**Linux & macOS**
```bash
curl -fsSL https://bun.sh/install | bash
```
**Windows**
```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

### 2) clone repo และ ติดตั้ง dependencies
```bash
git clone https://github.com/SSzSun/PRIMO-test-typescript.git
cd PRIMO-test-typescript
```
```bash
bun install
```

### 3) Run Code
**สำหรับ Code หลัก**
```bash
bun run start
```
**สำหรับ Unit Test**
```bash
bun run test
```

### 4) ผลลัพธ์ที่เกิดขึ้นของการ test 
```cmd
✓ merge with one empty array
✓ merge with all arrays empty
✓ merge throws error if all collections exhausted but loop continues
✓ merge with array 2 empty and others non-empty
✓ merge handles descending order in collection_2 correctly
✓ merge handles duplicate numbers correctly

  6 pass, 0 fail
```
