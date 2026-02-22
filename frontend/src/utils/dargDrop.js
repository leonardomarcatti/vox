const handleDragEnd = async (event, revalidate) => {
   if (event.canceled) return;

   const sourceId = event.operation?.source?.id;
   const targetId = event.operation?.target?.id;

   if (!sourceId || !targetId || sourceId === targetId) {
      return;
   }

   await fetch("/api/updateStatus", {
      method: "post",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({
         task_id: sourceId,
         status: targetId,
      }),
   });

   setTimeout(() => {
      revalidate();
   }, 150);
};

export { handleDragEnd };