import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export async function POST(req: NextRequest) {
  const { firstname, middlename, lastname, license_no, contact, region, city, brgy, street } = await req.json();

  try {
    const [result] = await pool.query(
      'INSERT INTO operators (firstname, middlename, lastname, license_no, contact, region, city, brgy, street) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [firstname, middlename, lastname, license_no, contact, region, city, brgy, street]
    );

    // Type assertion to ResultSetHeader to access insertId
    const insertResult = result as mysql.ResultSetHeader;

    return NextResponse.json({ id: insertResult.insertId, firstname, middlename, lastname, license_no, contact, region, city, brgy, street }, { status: 201 });
  } catch (error: any) { // Explicitly typing error as 'any'
    return NextResponse.json({ message: 'Failed to add operator', error: error.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const [rows] = await pool.query('SELECT * FROM operators');
    return NextResponse.json(rows);
  } catch (error: any) { // Explicitly typing error as 'any'
    return NextResponse.json({ message: 'Failed to retrieve operators', error: error.message }, { status: 500 });
  }
}
