<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FileDownload.aspx.cs" Inherits="FileDownload.FileDownload" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:DropDownList runat="server" ID="ddlLan">
            <asp:ListItem Text="English" />
            <asp:ListItem Text="Spanish" />
        </asp:DropDownList>
    </div>
    <div>
        <asp:LinkButton Text="click there to download the file" runat="server" ID="lkbDownload" OnClick="lkbDownload_Click"/>
    </div>
    <div>
        <asp:FileUpload ID="FileUpload" runat="server"/>
    </div>
    </form>
    <script>

        var userData = "{username:'test1',pwd:'password'}";
        $.ajax({
            type: 'post',
            url: 'NormalPage.aspx/Login',
            dataType: 'json',
            contentType: 'application/json',
            data: userData,
            success: function (result) {
                alert(result.d);
            },
            error: function () {
                alert('error');
            }
        });
    </script>
</body>
</html>
