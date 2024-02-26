"use server";

import prisma from "@/lib/prisma";

export const reorderTechnologies = async (
  id: string,
  oldIndex: number,
  newIndex: number
) => {
  try {
    if (newIndex > oldIndex) {
      // Minus sort rule because we are moving the element to the right
      await prisma.technology.updateMany({
        where: {
          order: {
            lte: newIndex,
            gt: oldIndex,
          },
        },
        data: {
          order: {
            decrement: 1,
          },
        },
      });
    } else {
      // Add sort rule because we are moving the element to the left
      await prisma.technology.updateMany({
        where: {
          order: {
            gte: newIndex,
            lt: oldIndex,
          },
        },
        data: {
          order: {
            increment: 1,
          },
        },
      });
    }

    // Update the order for the current element
    await prisma.technology.update({
      where: {
        id,
      },
      data: {
        order: newIndex,
      },
    });
    return { success: true };
  } catch (error) {
    return { error: "Algo ha salido mal reordenando las tecnologías" };
  }
};
