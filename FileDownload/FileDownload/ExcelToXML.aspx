<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ExcelToXML.aspx.cs" Inherits="FileDownload.ExcelToXML" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form" runat="server">
    <div>
        <asp:FileUpload ID="FileUpload" runat="server" />
        <asp:Button Text="Upload&ToXML" runat="server" ID="btnUpload" OnClick="btnUpload_Click"/>
        <asp:GridView ID="GridView" runat="server"></asp:GridView>
    </div>
    </form>
</body>
</html>
