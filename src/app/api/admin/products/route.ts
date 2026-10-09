import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, price, category, stock, image, sku } = body;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        category,
        stock,
        image,
        sku,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
